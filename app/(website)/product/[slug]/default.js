"use client"
import React from "react";
import Image from "next/image";
import Container from "@/components/container";
import { notFound } from "next/navigation";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import { toast } from "sonner";

import CategoryLabel from "@/components/product/category";
import { Separator } from "@/components/ui/separator";
import { formatter } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Label from "@/components/ui/label";
import UseCart from '@/hooks/use-cart'


export default function Product(props) {
  const { loading, product } = props;
  const slug = product?.slug;
  if (!loading && !slug) {
    notFound();
  }
  const [ qty, setQty ] = React.useState(0);
  const qtyRef = React.useRef();
  const imageProps = product?.mainImage
    ? urlForImage(product?.mainImage)
    : null;

  const cart = UseCart();
  
  const onAddToCart = (event) =>{
      event.stopPropagation();
      const qtyProps = { quantity: qty}
      if(qty > 0){
        console.log({...product, ...qtyProps })
        cart.addItem({...product, ...qtyProps })
      } else {
        toast.warning("Bad request",{
          description: "Item quantity can't be '0' ",
          action:{
            label: "Return",
            onClick: () => { qtyRef.current.focus(); }
          }
        })
      }
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative z-0 mx-auto min-h-[350px] w-full aspect-square overflow-hidden lg:rounded-lg">
        {imageProps && (
          <Image
            src={imageProps.src}
            alt={product.mainImage?.alt || "Thumbnail"}
            loading="eager"
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>
      <Container className="!pt-0">
        <article className="max-w-screen-md ">
          <div className="mx-auto max-w-screen-md ">
            <div className="flex">
              <CategoryLabel categories={product.productCategory} />
            </div>

            <h1 className="text-brand-primary uppercase mb-3 mt-2 text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
              {product.name}
            </h1>
          </div>
          <Separator />
          <div className="text-2xl font-semibold my-5">
            {formatter.format(product.price)}
          </div>

          <div className="prose my-3 dark:prose-invert prose-a:text-blue-600">
            {product.body && <PortableText value={product.body} />}
          </div>

          <div className="w-full flex items-center justify-center gap-3 py-3">
            <div className="w-1/4" >
              <Label htmlFor="qty">Quantity</Label>
              <Input 
                autoFocus 
                ref={qtyRef} 
                id="qty" 
                type="number" 
                placeholder="0"
                value={qty}
                onChange={ e=> setQty(e.target.value)}                
              />
            </div>
            <Button onClick={onAddToCart} className="bg-lime-600 hover:bg-lime-500 w-3/4 mt-9">Add to cart</Button>
          </div>
        </article>
      </Container>
    </section>
  );
}

const MainImage = ({ image }) => {
  return (
    <div className="mb-12 mt-12 ">
      <Image {...urlForImage(image)} alt={image.alt || "Thumbnail"} />
      <figcaption className="text-center ">
        {image.caption && (
          <span className="text-sm italic text-gray-600 dark:text-gray-400">
            {image.caption}
          </span>
        )}
      </figcaption>
    </div>
  );
};
