export interface Product{
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
  brand?: [{
    name: string,
    slug: []
  }];
  quantity: number;
}