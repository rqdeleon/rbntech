import HomePage from "./home";
import { getAllPosts, getFeaturedProducts } from "@/lib/sanity/client";
import BrandSlidder from "@/components/sections/brandSlidder";

export default async function IndexPage() {
  
  // Define the parameters for fetching posts based on the current page
  const params = {
    pageIndex:0,
    limit: 6,
  };
  
  const posts = await getAllPosts();
  const products = await getFeaturedProducts(params);
  return (
    <>
      <HomePage posts={posts} products={products} />
      <BrandSlidder />
    </>
  )

}

// export const revalidate = 60;
