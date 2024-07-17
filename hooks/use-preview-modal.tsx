import { create } from "zustand"

interface Product{
    _createdAt: string;
    _id:string;
    _rev:string;
    _type:string;
    _updatedAt:Date;
    body?: string[];
    featured: boolean;
    mainImage?: string[];
    name:string;
    price: string;
    productCategory?: string[];
    brand?: string[];
    quantity: number;
}

interface PreviewModalProps{
    isOpen: boolean;
    data?: Product;
    onOpen: (data: Product) => void;
    onClose: () => void;
}
const usePreviewModal = create<PreviewModalProps>((set) => ({
        isOpen: false,
        data: undefined,
        onOpen: (data: Product) => set({data, isOpen: true}),
        onClose: ()=> set({ isOpen: false})
    })
)

export default usePreviewModal;