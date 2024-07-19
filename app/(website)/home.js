import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import ProductList from "@/components/productlist";
import CategoryBanner from "@/components/sections/category-banner";
import Testimony from "@/components/sections/testimonials";
import { Heading } from "@/components/heading";


export default function Post({ posts, products }) {
  return (
    <>
        <Container props={{large:true}}>
          <div className="grid gap-10 grid-cols-2 md:grid-cols-4 lg:gap-10 ">
            {products.map(prod => (
              <ProductList
                key={prod._id}
                post={prod}
                aspect="square"
                preloadImage={true}
              />
            ))}
          </div>
          <CategoryBanner />
        </Container>

          <Testimony />

          {posts && (
            <Container props={{large:true}}>
              <Heading title="Stay Updated" description="Read news and blogs coming from our team" />
              <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-4 ">
                {posts.slice(0, 4).map(post => (
                  <PostList key={post._id} post={post} aspect="square" />
                ))}
              </div>
              <div className="mt-10 flex justify-center">
                <Link
                  href="/archive"
                  className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
                  <span>Read Our Blog</span>
                </Link>
              </div>
          </Container>
          )}
    </>
  );
}
