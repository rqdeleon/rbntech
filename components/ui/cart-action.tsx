"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

import { Button } from './button'
import { ShoppingBasket } from 'lucide-react'
import UseCart from '@/hooks/use-cart'

const CartAction = () => {
	const [isMounted,setIsMounted] = React.useState(false)

	React.useEffect(()=> {
		setIsMounted(true)
	}, []);

	const cart= UseCart();
	const router = useRouter();	;

	if(!isMounted){ return null }
	
	return (
		<div className="ml-auto flex items-center gap-x-4">
			<Button 
				className='bg-lime-700 hover:bg-lime-600'
				onClick={()=> router.push("/cart")}>
				<ShoppingBasket 
					size={24}
				/>
			<span className="ml-2 text-sm font-medium text-white">
				&#40;{cart.items.length}&#41;
			</span>
			</Button>
		</div>
	)
}

export default CartAction