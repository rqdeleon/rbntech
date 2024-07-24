'use client'
import Image from "next/image";
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function BannerCarousel(){
  
  const projectData = [
    {
      description:'empowering industries with quality products',
      image: '/img/banners/banner1.png',
      link:'#',
    },
    {
      description:'we have you covered',
      image: '/img/banners/banner2.png',
      link:'#',
    },
]
  return(
    <section>
        <div className="w-full flex flex-col items-center justify-center" >
            <Carousel
              opts={{ align: "start", }}
              className="relative w-full group"
              plugins={
                [
                  Autoplay({ delay:5000 })
                ]
              }
            >
              <CarouselContent>
                {projectData.map((project) => (
                  <CarouselItem key={project.image} className="flex items-center justify-center">
                    <article className="w-full" >
                      <div className="relative bg-cyan-900 mx-auto min-h-[345px] md:min-h-[450px] lg:min-h-[695px] overflow-hidden z-0 ">
                        <Image
                          src={project.image}
                          alt={project.description}
                          fill
                          className="object-cover transition delay-300 duration-500 2xl:object-contain"
                        />
                      </div>
                    </article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute top-0 left-0 w-full h-full hidden group-hover:block transition-all duration-500">
                <CarouselPrevious className="left-12 h-12 w-12" />
                <CarouselNext className="right-14 h-12 w-12"/>
              </div>
            </Carousel>
            </div>
    </section>
  );
}