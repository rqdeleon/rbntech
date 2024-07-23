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
      <Container props={{large:true}} > 
        <Heading title="Featured Products" className="pb-10" link="/product"/>
          <div className="grid gap-10 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:gap-10 ">
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
            <Heading title="Stay Updated" description="Read news and blogs coming from our team" link="/blog"/>
            <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-10 ">
              <div className="md:col-span-2">
              {posts.slice(0, 1).map(post => (
                  <PostList key={post._id} post={post} aspect="landscape" />
                ))}
              </div>
              <div >
                {posts.slice(1, 4).map(post => (
                    <PostList key={post._id} post={post}  minimal={true} />
                  ))}
              </div>
            </div>
        </Container>
        )}
    </>
  );
}
