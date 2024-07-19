import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'
import { cn } from '@/lib/utils'


interface HeadingProps{
    title: string,
    description: string,
    className?: string,
    link?: string,
}

export const Heading: React.FC<HeadingProps> = ({title, description, className, link}) => {
  return (
    <div className={cn('align-center align-middle flex justify-between', className)}>
      <div>
        <h3 className="text-lg font-semibold tracking-wide text-foreground/60 md:text-2xl">{title}</h3>
        <p className="text-md text-muted-foreground">{description}</p>
      </div>
      {link &&<Link href={link} className='group flex text-md transition-all tracking-wide hover:underline'>view all<ArrowRightIcon className='w-4 group-hover:translate-x-2' /></Link>}
    </div>
  )
}

