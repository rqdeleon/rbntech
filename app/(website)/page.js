import HomePage from "./home";
import { getAllPosts, getFeaturedProducts } from "@/lib/sanity/client";
import BannerCarousel from "@/components/sections/banner-carousel";

export default async function IndexPage() {
  
  // Define the parameters for fetching posts based on the current page
  const params = {
    pageIndex:0,
    limit: 8,
  };
  
  const posts = await getAllPosts();
  const products = await getFeaturedProducts(params);
  return (
    <>
      <BannerCarousel />
      <HomePage posts={posts} products={products} />
    </>
  )

}

export const revalidate = 600;
