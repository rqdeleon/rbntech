import Image from "next/image";

import ProductList from "@/components/productlist";
import Pagination from "@/components/blog/pagination";
import { 
  getCategorizeProducts, 
  getPaginatedProducts, 
  getSearchProducts,
  getProductsByBrand,
} from "@/lib/sanity/client";

export default async function Products({ searchParams }) {
  // Fetch the current page from the query parameters, defaulting to 1 if it doesn't exist
  const page = searchParams.page;
  const pageIndex = parseInt(page, 10) || 1;
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

  // Check if the current page is the first or the last
  const isFirstPage = pageIndex < 2;
  const isLastPage = products.length < POSTS_PER_PAGE;

  return (
      <div className="container">
        <div className="flex flex-col gap-4 lg:flex-row ">
        { products && products?.length === 0 ?
          <div className="flex flex-col w-full items-center justify-center py-12">
            <span className="text-2xl text-gray-500">
              Search a product by name, category or brands
            </span>
              <Image 
                src="/img/404/searchmore.png"
                width={450}
                height={450}
                alt="search more"
                loading="lazy"
              />
          </div>
        :
        <main className="w-3/4 mt-0 lg:mt-10">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
            {products.map(prod => (
              <ProductList key={prod._id} post={prod} aspect="square" />
            ))}
          </div>
          <Pagination
            pageIndex={pageIndex}
            isFirstPage={isFirstPage}
            isLastPage={isLastPage}
          />
        </main>
        }
        </div>
    </div>
  );
}
