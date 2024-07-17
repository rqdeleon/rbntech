import { apiVersion, dataset, projectId, useCdn } from "./config";
import {
  postquery,
  limitquery,
  singleproductquery,
  pathproductquery,
  paginatedproductquery,
  paginatedquery,
  configQuery,
  singlequery,
  pathquery,
  allauthorsquery,
  authorsquery,
  postsbyauthorquery,
  postsbycatquery,
  catpathquery,
  catquery,
  getAll,
  featuredproductsquery,
  paginatedcategorizequery,
  allproductcategoryquery,
  productsbybrandquery,
  allbrandsquery,
  searchproductquery,
  searchquery
} from "./groq";
import { createClient } from "next-sanity";

if (!projectId) {
  console.error(
    "The Sanity Project ID is not set. Check your environment variables."
  );
}

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null;

export const fetcher = async ([query, params]) => {
  return client ? client.fetch(query, params) : [];
};

(async () => {
  if (client) {
    const data = await client.fetch(getAll);
    if (!data || !data.length) {
      console.error(
        "Sanity returns empty array. Are you sure the dataset is public?"
      );
    }
  }
})();

export async function getAllPosts() {
  if (client) {
    return (await client.fetch(postquery)) || [];
  }
  return [];
}

export async function getSettings() {
  if (client) {
    return (await client.fetch(configQuery)) || [];
  }
  return [];
}

export async function getPostBySlug(slug) {
  if (client) {
    return (await client.fetch(singlequery, { slug })) || {};
  }
  return {};
}

export async function getAllPostsSlugs() {
  if (client) {
    const slugs = (await client.fetch(pathquery)) || [];
    return slugs.map(slug => ({ slug }));
  }
  return [];
}

// Products
export async function getProductBySlug(slug) {
  if (client) {
    return (await client.fetch(singleproductquery, { slug })) || {};
  }
  return {};
}

export async function getAllProductsSlug() {
  if (client) {
    const slugs = (await client.fetch(pathproductquery)) || [];
    return slugs.map(slug => ({ slug }));
  }
  return [];
}

export async function getFeaturedProducts({ limit, pageIndex = 0 }) {
  if (client) {
    return (
      (await client.fetch(featuredproductsquery, {
        pageIndex: pageIndex,
        limit: limit
      })) || []
    );
  }
  return [];
}

export async function getSearchProducts({ limit, pageIndex = 0, search }) {
  if (client) {
    return (
      (await client.fetch(searchproductquery, {
        search: search,
        pageIndex: pageIndex,
        limit: limit
      })) || []
    );
  }
  return [];
}

export async function getAllProductCategory() {
  if (client) {
    const slugs = (await client.fetch(allproductcategoryquery)) || [];
    return slugs;
  }
  return [];
}

//Brand
export async function getProductsByBrand({limit, pageIndex = 0, slug}) {
  if (client) {
    return (await client.fetch(productsbybrandquery, {
      slug: slug,
      limit: limit,
      pageIndex: pageIndex,
    })) || {};
  }
  return {};
}

export async function getAllBrand() {
  if (client) {
    const brands = (await client.fetch(allbrandsquery)) || [];
    return brands;
  }
  return [];
}


// Category

export async function getAllCategories() {
  if (client) {
    const slugs = (await client.fetch(catpathquery)) || [];
    return slugs.map(slug => ({ category: slug }));
  }
  return [];
}

export async function getPostsByCategory(slug) {
  if (client) {
    return (await client.fetch(postsbycatquery, { slug })) || {};
  }
  return {};
}

export async function getTopCategories() {
  if (client) {
    return (await client.fetch(catquery)) || [];
  }
  return [];
}

export async function getPaginatedPosts({ limit, pageIndex = 0 }) {
  if (client) {
    return (
      (await client.fetch(paginatedquery, {
        pageIndex: pageIndex,
        limit: limit
      })) || []
    );
  }
  return [];
}

export async function getPaginatedProducts({ limit, pageIndex = 0 }) {
  if (client) {
    return (
      (await client.fetch(paginatedproductquery, {
        pageIndex: pageIndex,
        limit: limit
      })) || []
    );
  }
  return [];
}
export async function getCategorizeProducts({ limit, pageIndex = 0, category }) {
  if (client) {
    return (
      (await client.fetch(paginatedcategorizequery, {
        category: category,
        pageIndex: pageIndex,
        limit: limit
      })) || []
    );
  }
  return [];
}

// Author
export async function getAllAuthorsSlugs() {
  if (client) {
    const slugs = (await client.fetch(authorsquery)) || [];
    return slugs.map(slug => ({ author: slug }));
  }
  return [];
}

export async function getAuthorPostsBySlug(slug) {
  if (client) {
    return (await client.fetch(postsbyauthorquery, { slug })) || {};
  }
  return {};
}

export async function getAllAuthors() {
  if (client) {
    return (await client.fetch(allauthorsquery)) || [];
  }
  return [];
}
