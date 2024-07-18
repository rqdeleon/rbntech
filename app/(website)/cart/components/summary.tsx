"use client";

import React from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { toast } from "sonner";

import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { formatter } from "@/lib/utils";
import useCart from "@/hooks/use-cart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";


type FormProps = {
  email: string,
  name?: string,
  phone: string,
  oder: string,
}

const Summary = ({ settings }) => {
  
  const items = useCart((state) => state.items);
  // const removeAll = useCart((state) => state.removeAll);
  // useEffect(() => {
  //   if (searchParams.get('success')) {
  //     toast('Payment completed.');
  //     removeAll();
  //   }

  //   if (searchParams.get('canceled')) {
  //     toast('Something went wrong.');
  //   }
  // }, [searchParams, removeAll]);
  const apiKey = settings?.w3ckey || "YOUR_ACCESS_KEY_HERE"
  
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm<FormProps>({
    mode: "onTouched"
  });

  const totalPrice = items.reduce((total, item) => {
    return total + (Number(item.price) *item.quantity )
  }, 0);

  const priceQty = ({price, qty})=>{
    const thePrice = Number(price) * Number(qty)
    return formatter.format(thePrice)
  }

  const cart = useCart();

  const { submit: onCheckout } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "RBNTECH Order Form",
      subject: "New Order Message From RBNTECH.PH"
    },
    onSuccess: (msg, data) => {
      toast.success(msg);
      reset();
      // cart.removeAll();
    },
    onError: (msg, data) => {
      toast.error(msg);
    }
  });

  return (
    <div className="mt-16 rounded-lg sm:p-6 lg:col-span-5 lg:mt-0">
      <Card
        className="overflow-hidden"
      >
      <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 text-lg">
            Order
          </CardTitle>
          <CardDescription>Date: { format(new Date(), "MMM dd, yyyy")}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6 text-sm">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Order Details
        </h2>

        <ul className="grid gap-3">
          {items.map((item)=>(
            <li key={item._id} className="flex items-center justify-between">
              <span className="text-muted-foreground">
                {item.name} x <span>{item.quantity}</span>
              </span>
              <span>{ priceQty({price: item.price, qty: item.quantity})}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 space-y-4 border-t border-gray-200 ">
          <div className="flex items-center justify-between pt-4">
            <div className="text-base font-medium text-gray-900">Order total</div>
            <span>{formatter.format(totalPrice)}</span>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-5">
          <form onSubmit={handleSubmit(onCheckout)}>
            <input {...register("oder", { 
              value: `${items.map((item)=>(
                      `brand: ${item.brand ? item.brand[0].name : "no-brand"} item: ${item.name} x ${item.quantity} =  ${ priceQty({price: item.price, qty: item.quantity}) }\n`
                    ))}` 
            })} type="hidden" />
            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">
                Email Address
              </label>
              <input
                id="email_address"
                type="email"
                placeholder="Email Address"
                autoComplete="false"
                disabled={items.length === 0}
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                  errors.email
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email"
                  }
                })}
              />
              {errors.email && (
                <div className="mt-1 text-red-600">
                  <small>{errors.email.message}</small>
                </div>
              )}
            </div>  

            <div className="mb-5">
              <input
                type="text"
                placeholder="Phone number"
                autoComplete="false"
                disabled={items.length === 0}
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                  errors.name
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("phone", {
                  required: "Phone number is required",
                  maxLength: 80
                })}
              />
              {errors.name && (
                <div className="mt-1 text-red-600">
                  <small>{errors.name.message}</small>
                </div>
              )}
            </div>  
      
            <Button type="submit" disabled={items.length === 0} className="w-full mt-6 bg-lime-700 hover:bg-lime-600">
              Mail Us Your Order
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}
 
export default Summary;
