"use client"
import React from 'react'
import Link  from 'next/link'
import Image from 'next/image'
import Container from '@/components/container'
import { Heading } from '@/components/heading'

export default function CatalogPage(){
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
      catalog: '/catalog/FUJIMA.pdf',
    },
    {
      label: 'Dayuan',
      img: '/img/brands/dayuan.png',
      bwImg: '/img/brands/bw/dayan.png',
      catalog: '/catalog/DAYUAN.pdf',
    },
    {
      label: 'Hoteche',
      img: '/img/brands/hoteche.jpg',
      bwImg: '/img/brands/bw/hoteche.jpg',
      catalog: '/catalog/HOTECHE.pdf',
    },
    {
      label: 'Wixim',
      img: '/img/brands/wixim.jpg',
      bwImg: '/img/brands/bw/wixim.jpg',
      catalog: '/catalog/WIXIM.pdf',
    },
  ]
  return (
    <Container>
      <div>
        <Heading title='Catalog by brands' description='download latest catalogs from our business partners'/>
        <ul className='grid grid-cols-3 gap-4'>
        {
          brands.map((b)=>(
            <li 
              key={b.img} 
              className='flex p-2 items-center justify-center hover:shadow-lg'
            >
              <Link href={b.catalog} target='blank'>
                <Image 
                  src={b.img}
                  width={250}
                  height={250}
                  alt={b.label}
                />
              </Link>
            </li>
          ))
        }
        </ul>
      </div>
    </Container>
  )
}
