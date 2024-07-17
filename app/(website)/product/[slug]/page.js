import Product from "./default";

import { getAllProductsSlug, getProductBySlug } from "@/lib/sanity/client";
import { MainBreadcrumb } from "@/components/mainBreadcrumb";
import Container from "@/components/container";
import ProductList from "@/components/productlist";
import { Heading } from "@/components/heading";

export async function generateStaticParams() {
  return await getAllProductsSlug();
}

export async function generateMetadata({ params }) {
  const product = await getProductBySlug(params.slug);
  return { title: product.name };
}

export default async function PostDefault({ params }) {
  const product = await getProductBySlug(params.slug);

  return(  
    <Container>
      <MainBreadcrumb />
      <Product product={product} />

      <Heading title="Related Products" description=" " className="my-10"/>
      <div className="grid gap-10 grid-cols-2 lg:gap-10 md:grid-cols-4">
        {product.related.map(prod => (
          <ProductList key={prod._id} post={prod} aspect="square" />
        ))}
      </div>
    </Container>
  );
}

export const revalidate = 600;
