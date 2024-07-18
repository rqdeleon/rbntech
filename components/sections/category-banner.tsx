'use client'
import Image from 'next/image'
import Link from 'next/link'
import { PhotoIcon } from "@heroicons/react/24/outline";

import { Heading } from "@/components/heading";

const CategoryBanner = () => {
  
  const categories = [
    {
      title: 'Power Tools',
      link: 'power-tools',
      img: '/img/category/powertool.jpg',
    },
    {
      title: 'Office Interior',
      link: 'office',
      img: '/img/category/office.jpg',
    },
    {
      title: 'Industrial',
      link: 'industrial',
      img: '/img/category/generator.jpg',
    },
    {
      title: 'Electrical',
      link: 'electrical',
      img: '/img/category/electrical.jpg',
    },
    {
      title: 'Appliances',
      link: 'appliances',
      img: '/img/category/airfyer.jpg',
    },
    {
      title: 'Equipments',
      link: 'equipment',
      img: '/img/category/hardware.jpg',
    },
  ];
  return (
    <section>
      <div className="text-center mt-20">
        <Heading title="Categories" description="Search products by categories" className="mb-10" />
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {categories.map((cat)=>(
            <li 
              key={`${cat.img}`} 
              className='flex flex-col items-center group cursor-pointer'
            >
              <Link
                href={`/product?cat=${cat.link}`}
              >
                <div className='relative rounded-full w-[150px] h-[150px] overflow-hidden mb-4 hover:scale-105 duration-200'>
                  <Image 
                    src={cat.img}
                    fill
                    alt='powertool'
                    className="object-cover transition-all"
                    loading='lazy'
                  />
                </div>
                <span
                  className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom font-bold text-lg
                  bg-no-repeat
                  transition-[background-size]
                  duration-500
                  hover:bg-[length:100%_3px]
                  group-hover:bg-[length:100%_10px]
                  dark:from-cyan-800 dark:to-cyan-900">
                    {cat.title}
                </span>
              </Link>
          </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CategoryBanner;