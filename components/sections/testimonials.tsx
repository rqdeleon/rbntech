"use client"
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

import Container from "../container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Heading } from "../heading";


export default function Testimony(){
  
  const testimonialData = [
    {
      slideNo: 1,
      name: "Jojo Biray",
      profile: "/images/testimonials/eca.jpg",
      text: "RBNTECH has been one of the trusted tools dealer in the PH. I ordered a Makita 2012NB. Smooth transaction as expected and got the item the same day thru lalamove.",
      job: "Calabarzon Shuttle"
    },
    {
      slideNo: 2,
      name: "James Alvarez",
      profile: "/images/testimonials/mark.jpg",
      text: "Very professional staff - they communicate well and timely. Process of ordering is very good and you get a same day ship services. High quality and genuine branded products. I am very comfortable dealing with RBNTECH. ",
      job: "Financial Firm"
    },
    {
      slideNo: 3,
      name: "Jamie Gellido",
      profile: "/images/testimonials/jamie.jpg",
      text: "Super convenient & very fast transaction. CS is very accommodating! I ordered at 3pm, got my advanced father's day gift for my husband before 5pm. 😊 Also, since it's a gift, tried my luck to ask for a favor to have it wrapped kahit newspaper lang, they wrapped nicely and even had it tightly seale Thank you so much! Husband was super surprised and happy!.",
      job: "business owner"
    },
    {
      slideNo: 4,
      name: "John Reyes",
      profile: "/images/testimonials/jamie.jpg",
      text: "Superb customer service! Quality products",
      job: "Engineer"
    },
    {
      slideNo: 5,
      name: "John Reyes",
      profile: "/images/testimonials/jamie.jpg",
      text: "Being on the road most of the time, I rely on equipment that I can trust. RBNTECH’s products are robust and easy to use, making my job a lot easier and safer. I wouldn’t go anywhere else for my industrial needs at they are very friendly.",
      job: "Civil Engineer"
    },
  ];
  
  return(
    <section id="review" className="pb-20 pt-10 mt-10 bg-cyan-900 lg:pb-[120px] lg:pt-20">
      <Container>
        <Heading title="What our customers say" description=" " className="text-slate-200 mb-10"/>
        <div className="relative flex justify-center ">
          <div className="relative w-full" >
            <Carousel
              opts={{ align: "start", }}
              className="relative mt-9"
            >
              <div className="absolute -top-8 right-10">
                <CarouselPrevious className="-left-9"/>
                <CarouselNext className="-right-9" />
              </div>
              <CarouselContent>
                {testimonialData.map((index) => (
                  <CarouselItem key={index.slideNo} className="md:basis-1/2 lg:basis-1/3 ">
                    <div className="bg-slate-200 p-11 min-h-72 rounded-lg" >
                      <div className="">
                        <main className="">
                          <div className="flex gap-1 w-24 h-24 text-cyan-900">
                              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                          </div>
                          <p className="text-md mb-11 font-normal italic text-cyan-900 dark:text-dark-6" >
                            {index.text}
                          </p>
                        </main>
                        <footer className="flex gap-x-4">
                          <div className="content-center">
                            <h4 className="text-md font-semibold text-cyan-900"
                            >
                              {index.name}
                            </h4>
                            <p className="text-xs text-cyan-900 dark:text-dark-6">
                              {index.job}
                            </p>
                          </div>
                        </footer>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            </div>
          </div>
      </Container>
    </section>
  );
}