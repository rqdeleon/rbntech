import { create } from "zustand"
import { persist, createJSONStorage} from "zustand/middleware"
import { toast } from "sonner";

import { Product } from "@/types";


interface CartStore{
    items: Product[];
    addItem: (data: Product) => void;
    deductQuantity: (id: string) => void;
    addQuantity: (id: string) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const UseCart = create(
    persist<CartStore>((set, get)=> ({
        items: [],
        addItem: (data: Product) =>{
            const currentItems = get().items;
            const existingItems = currentItems.find((item)=> item._id === data._id);

            if(existingItems){
                currentItems.map((item)=>(
                    item._id === data._id ? item.quantity = Number(data.quantity) + Number(item.quantity) : item
                ));

                set({items:[...currentItems]})

            }else {

                set({ items: [...get().items, data]});
            }

            toast.success("Item added to cart")
        },

        deductQuantity: (id: string)=>{

            const currentItems = get().items;
            const existingItem =  currentItems.find((item)=> item._id === id);

            if(existingItem && existingItem.quantity > 1){

                currentItems.map((item)=>(
                    item._id === id ? item.quantity = item.quantity  - 1 : item
                ));

                set({items:[...currentItems]}) 
            }
            if(existingItem && existingItem.quantity == 0){

                currentItems.map((item)=>(
                    item._id === id ? item.quantity = item.quantity  - 1 : item
                ));

                set({ items: [...get().items.filter((item) => item._id != id)]});
                toast.success("Item removed from the cart");
            }
        },

        addQuantity: (id: string)=>{
            const currentItems = get().items;
            const existingItem =  currentItems.find((item)=> item._id === id);

            if(existingItem && existingItem.quantity >= 1){

                currentItems.map((item)=>(
                    item._id === id ? item.quantity = item.quantity  + 1 : item
                ));

                set({items:[...currentItems]}) 
            }
        },

        removeItem: (id: string) =>{
            set({ items: [...get().items.filter((item) => item._id != id)]});
            toast.error("Item removed from the cart");
        },

        removeAll: ()=> set({ items:[] }),

    }), {
        name: "cart-storage",
        storage: createJSONStorage(()=> localStorage)
    })
);

export default UseCart