import ProductList from "@/components/productlist";
import Pagination from "@/components/blog/pagination";
import { getProductsByBrand } from "@/lib/sanity/client";

export default async function Archive({ params, searchParams }) {
  // Fetch the current page from the query parameters, defaulting to 1 if it doesn't exist
  const page = searchParams.page;
  const pageIndex = parseInt(page, 10)  || 1;
  const brand = { slug: params.brandSlug }

  // Set the number of posts to be displayed per page
  const POSTS_PER_PAGE = 6;

  // Define the parameters for fetching posts based on the current page
  const pagination = {
    pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
    limit: pageIndex * POSTS_PER_PAGE
  };

  const products = await getProductsByBrand({...pagination, ...brand });

  // Check if the current page is the first or the last
  const isFirstPage = pageIndex < 2;
  const isLastPage = products.length < POSTS_PER_PAGE;

  return (
    <>

      {products && products?.length === 0 && (
        <div className="flex h-40 items-center justify-center">
          <span className="text-lg text-gray-500">
            End of the result!
          </span>
        </div>
      )}
      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
        {products.map(prod => (
          <ProductList key={prod._id} post={prod} aspect="square" />
        ))}
      </div>

      <Pagination
        pageIndex={pageIndex}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
      />
    </>
  );
}
