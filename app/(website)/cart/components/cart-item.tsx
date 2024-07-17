import Image from "next/image";
import { toast } from "sonner";
import { Minus, Plus, X, Image as ImageIcon} from "lucide-react";
import { urlForImage } from "@/lib/sanity/image";

import IconButton from "@/components/ui/icon-button";
import { formatter } from "@/lib/utils";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";



interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({
  data
}) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data._id);
  };
  const addQ = () => {
    cart.addQuantity(data._id)
  }

  const deductQ = () =>{
    cart.deductQuantity(data._id)
  }
  const imageProps = data.mainImage
  ? urlForImage(data.mainImage)
  : null;

  return ( 
    <li className="grid grid-cols-1 md:grid-cols-2 gap-2 py-6 border-b">
      <header className="flex flex-none gap-2 items-center">
        <div className="relative h-20 w-20 rounded-md overflow-hidden">
          {data.mainImage && imageProps ? (
            <Image
              src={imageProps.src}
              alt={data.name || "Thumbnail"}
              className="object-cover transition-all"
              fill
              sizes="(max-width: 80px) 30vw, 33vw"
            />
          ) : (
            <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
              <ImageIcon />
            </span>
          )}
        </div>
        <p className=" text-lg font-semibold text-black pr-3">
          {data.name}
        </p>
      </header>
      <div className="relative mt-5 flex items-center flex-1 flex-col justify-center md:ml-6 md:mt-0">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative flex-none grid grid-cols-2 gap-x-5 pr-0">
          <div className="flex justify-between">
            <p className=" text-lg text-black flex justify-between space-x-3 mr-5">
              <Button onClick={addQ} size="icon" variant="outline"><Plus size={10} /> </Button> 
              <span> {`QTY: ${Number(data.quantity)}`}</span>
              <Button onClick={deductQ} size="icon" variant="outline"><Minus size={10} /></Button>
            </p>
          </div>
          <span>{formatter.format(Number(data.price) * Number(data.quantity))}</span>
        </div>
      </div>
    </li>
  );
}
 
export default CartItem;
