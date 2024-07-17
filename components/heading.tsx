import React from 'react'
import { cn } from '@/lib/utils'

interface HeadingProps{
    title: string,
    description: string,
    className?: string,
}

export const Heading: React.FC<HeadingProps> = ({title, description, className}) => {
  return (
    <div className={cn('align-center align-middle', className)}>
      <h3 className="text-3xl font-semibold tracking-tight">{title}</h3>
      <p className="text-md text-muted-foreground">{description}</p>
    </div>
  )
}

