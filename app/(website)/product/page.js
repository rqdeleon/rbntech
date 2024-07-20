import { Suspense } from "react";

import Container from "@/components/container";
import { Separator } from "@/components/ui/separator";
import Products from "./products";
import Loading from "@/components/loading";
import { ProductSidebar } from "./product-sidebar";
import { 
  getAllProductCategory, 
  getAllBrand,
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
  
  const cats = await getAllProductCategory()

  const brands = await getAllBrand()

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
            <Products searchParams={searchParams} />
          </Suspense>
        </div>
      </Container>
    </>
  );
}

// export const revalidate = 60;
