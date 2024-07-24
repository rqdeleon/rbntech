'use client'
import React from 'react'
import Link from 'next/link'
import { SlidersHorizontal } from 'lucide-react'

import { useMediaQuery } from '@/hooks/use-media-query'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"

export const ProductSidebar = ({categories, brands}) => {
  const isDesktop = useMediaQuery("(min-width:1025px)");

  return (
    <>
    { isDesktop ? 
    <aside className='min-w-52 mr-7 space-y-7'>
      <div>
        <h3 className='text-md tracking-wider font-bold uppercase'>
          Categories
        </h3>
        <Separator />
        <ul className='flex flex-col gap-4 pl-3 py-7 text-sm uppercase tracking-tight font-semibold'>
            <li className='cursor-pointer  hover:text-blue-500'>
              <Link                
                href={`/product`}
              >
                All Product
              </Link>
            </li>
          {categories.map((cat)=>(
            <li 
              key={cat.slug.current} 
              className='cursor-pointer hover:text-blue-500'>
              <Link                
                href={`/product?cat=${cat.slug.current}`}
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className='text-md tracking-wider font-bold uppercase'>
          Brands
        </h3>
        <Separator />
        <ul className="flex flex-col gap-4 pl-3 py-7 text-sm uppercase tracking-tight font-semibold">
          {brands.map((brand)=>(
              <li 
                key={brand.slug.current} 
                className='cursor-pointer hover:text-blue-500'>
                <Link                
                  href={`/product?brand=${brand.slug.current}`}
                >
                  {brand.name}
                </Link>
              </li>
           ))}
          </ul>
      </div>
    </aside>
  :
    <MobileSheet categories={categories} brands={brands} />
  }
  </>
)
}

const MobileSheet = ({categories, brands})=>{
  return(
    <Sheet>
      <SheetTrigger>
        <div className='flex gap-3'>
          <SlidersHorizontal />
          <span className="text-md font-semibold"> Filter</span>
        </div>
      </SheetTrigger>
      <SheetContent side="left">
        <ScrollArea className="h-screen w-full pb-24">
          <aside>
            <div>
              <h3 className='text-lg uppercase'>
                Categories
              </h3>
              <Separator />
              <ul className='flex flex-col gap-3 text-md pl-3 pt-3 '>
                <li className='cursor-pointer hover:text-blue-500'>
                  <Link href={`/product`} >
                    <SheetClose>All Product</SheetClose>
                  </Link>
                </li>
                {categories.map((cat)=>(
                  <li 
                    key={cat.slug.current} 
                    className='cursor-pointer  hover:text-blue-500'>
                    <Link                
                      href={`/product?cat=${cat.slug.current}`}
                    >
                      <SheetClose>{cat.name}</SheetClose>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='mt-10'>
              <h3 className='text-lg uppercase'>
                Brands
              </h3>
              <Separator />
              <ul className="mt-4 flex flex-col gap-3 text-md pl-3 pt-3">
                {brands.map((brand)=>(
                  <li 
                  key={brand.slug.current} 
                  className='cursor-pointer hover:text-blue-500'>
                    <Link                
                      href={`/product?brand=${brand.slug.current}`}
                    >
                      <SheetClose>{brand.name}</SheetClose>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}