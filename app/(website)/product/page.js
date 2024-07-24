import { Suspense } from "react";

import Container from "@/components/container";
import { Separator } from "@/components/ui/separator";
import Products from "./products";
import Loading from "@/components/loading";
import { ProductSidebar } from "./product-sidebar";
import { 
  getAllProductCategory, 
  getAllBrand,
  getCategorizeProducts,
  getSearchProducts,
  getProductsByBrand,
  getPaginatedProducts,
} from "@/lib/sanity/client";

export async function generateStaticParams() {
  return await getAllProductCategory();
}

export async function generateMetadata(){
  const categories = await getAllProductCategory();
  
  return {
    title: 'All Products',
    description: categories.map(cat=> cat.name)
  }
}
export const dynamic = "force-dynamic";

export const runtime = "edge";

export default async function ProductPage({ searchParams }) {
  
  const cats = await getAllProductCategory();
  const brands = await getAllBrand();
  const page = searchParams.page;
  const pageIndex = parseInt(page, 10) || 1;
  
  // Look for searchparams 
  const searchCategory = { category: searchParams.cat}
  const searchQuery = { search: searchParams.sq }
  const searchBrandQuery = { slug: searchParams.brand }

  // Set the number of posts to be displayed per page
  const POSTS_PER_PAGE = 6;

  // Define the parameters for fetching posts based on the current page
  const params = {
    pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
    limit: pageIndex * POSTS_PER_PAGE,
  }
  
  // Get products according to params
  let products = []

    if(searchParams.cat){ 
      products =  await getCategorizeProducts({...params, ...searchCategory})
    }else if(searchParams.sq){
      products = await getSearchProducts({...params, ...searchQuery})
    }else if(searchParams.brand){
      products = await getProductsByBrand({...params, ...searchBrandQuery})
    }else{ 
      products =  await getPaginatedProducts(params)
    }

  return (
    <>
      <Container className="relative">
        <div>
          <h4 className="text-2xl font-semibold uppercase my-4">
            Products
          </h4>
          <Separator />
        </div>
        <div className="flex flex-col gap-7 lg:flex-row">
          <aside className="mt-10">
            <ProductSidebar categories={cats} brands={brands} />
          </aside> 
          <Suspense
            key={searchParams.page || "1"}
            fallback={<Loading />}>
            <Products searchParams={searchParams} products={products} />
          </Suspense>
        </div>
      </Container>
    </>
  );
}

export const revalidate = 60;
