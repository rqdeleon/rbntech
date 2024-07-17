"use client"
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function BrandSlidder(){
  
  const brands = [
    {
      label: 'Dong Cheng',
      img: '/img/brands/dongcheng.jpg',
      bwImg: '/img/brands/bw/dongcheng.jpg',
      catalog: '/catalog/DONGCHENG.pdf',
    },
    {
      label: 'Hoyoma Japan',
      img: '/img/brands/hoyoma.jpg',
      bwImg: '/img/brands/bw/hoyoma.jpg',
      catalog: '/catalog/HOYOMA.pdf',
    },
    {
      label: 'Fujima',
      img: '/img/brands/fujima.png',
      bwImg: '/img/brands/bw/fujima.png',
      catalog: '/cataglog/FUJIMA.pdf',
    },
    {
      label: 'Dayuan',
      img: '/img/brands/dayuan.png',
      bwImg: '/img/brands/bw/dayuan.jpg',
      catalog: '/cataglog/DAYUAN.pdf',
    },
    {
      label: 'Hoteche',
      img: '/img/brands/hoteche.jpg',
      bwImg: '/img/brands/bw/hoteche.jpg',
      catalog: '/cataglog/HOTECHE.pdf',
    },
    {
      label: 'Wixim',
      img: '/img/brands/wixim.jpg',
      bwImg: '/img/brands/bw/wixim.jpg',
      catalog: '/cataglog/WIXIM.pdf',
    },
  ]
  
  return(
    <section id="review" className="bg-pt-20 pb-10 dark:bg-dark lg:pt-20">
      <div className="relative flex justify-center ">
        <div className="relative w-full" >
          <Carousel
            opts={{ align: "start", }}
            className="relative mt-9"
            plugins={
              [
                Autoplay({ delay:2000 })
              ]
            }
          >
            <div className="absolute -top-8 right-10">
              <CarouselPrevious className="-left-9"/>
              <CarouselNext className="-right-9" />
            </div>
            <CarouselContent className="px-10">
                {brands.map((b) => (
                  <CarouselItem key={b.img} className="basis-1/2 lg:basis-1/4 ">
                    <Image 
                      src={b.bwImg}
                      width={250}
                      height={250}
                      alt={b.label}
                    />
                  </CarouselItem>
                ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}