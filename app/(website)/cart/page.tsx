import React from 'react'

import Container from '@/components/container';

import Summary from './components/summary'
import { CartCard } from './components/cartCard';
import { getSettings } from "@/lib/sanity/client";

const CartPage = async () => {

  const settings = await getSettings();

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <CartCard />
            <Summary settings={settings} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CartPage