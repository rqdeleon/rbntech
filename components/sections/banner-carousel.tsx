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
      description:'Help to raise valuable donations for Kids',
      image: '/img/banners/banner1.png',
      link:'#',
    },
    {
      description:'Help to raise valuable donations for Kids',
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
                    <article className="relative w-full h-[550px] md:h-[750px] overflow-hidden" >
                      <div className="relative w-full h-full overflow-hidden z-0 cursor-pointer ">
                        <Image
                          src={project.image}
                          alt="profile image"
                          fill
                          className="object-cover transition delay-300 duration-500"
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