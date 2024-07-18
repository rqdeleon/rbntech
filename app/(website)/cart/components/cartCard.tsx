'use client'
import React from 'react'

import UseCart from '@/hooks/use-cart';
import CartItem from './cart-item';

export const CartCard = () => {
  const cart = UseCart();
  return (
    <div className="lg:col-span-7">
      {cart.items.length === 0 &&
      <p className="text-neutral-500">No items added to cart.</p>}
      <ul>
        {cart.items.map((item) => (
          <CartItem key={item._id} data={item} />
        ))}
     </ul>
    </div>
  )
}
