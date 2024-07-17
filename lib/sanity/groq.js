import { groq } from "next-sanity";

// Get all posts
export const postquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) {
  _id,
  _createdAt,
  publishedAt,
  mainImage {
    ...,
    "blurDataURL":asset->metadata.lqip,
    "ImageColor": asset->metadata.palette.dominant.background,
  },
  featured,
  excerpt,
  slug,
  title,
  author-> {
    _id,
    image,
    slug,
    name
  },
  categories[]->,
}
`;
// Get all posts with 0..limit
export const limitquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) [0..$limit] {
  ...,
  author->,
  categories[]->
}
`;
// [(($pageIndex - 1) * 10)...$pageIndex * 10]{
// Get subsequent paginated posts
export const paginatedquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) [$pageIndex...$limit] {
  ...,
  categories[]->
}
`;

// Get subsequent paginated products
export const paginatedproductquery = groq`
*[_type == "product"] | order(publishedAt desc, _createdAt desc) [$pageIndex...$limit] {
  ...,
  productCategory[]->,
  brand[]->,
}
`;

// Get subsequent paginated products
export const paginatedcategorizequery = groq`
*[_type == "product" && $category in productCategory[]->slug.current ] | order(publishedAt desc, _createdAt desc) [$pageIndex...$limit] {
  ...,
  productCategory[]->,
  brand[]->,
}
`;

// Get subsequent featured products
export const featuredproductsquery = groq`
*[_type == "product" && featured == true] | order(publishedAt desc, _createdAt desc) [$pageIndex...$limit] {
  ...,
  productCategory[]->,
  brand[]->,
}
`;

// Get all product categories
export const allproductcategoryquery = groq`
*[_type == "productCategory"]{
 ...,
}
`;

// Get Site Config
export const configQuery = groq`
*[_type == "settings"][0] {
  ...,
}
`;

// Single Post
export const singlequery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ...,
  body[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    }
  },
  author->,
  categories[]->,
  "estReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  "related": *[_type == "post" && count(categories[@._ref in ^.^.categories[]._ref]) > 0 ] | order(publishedAt desc, _createdAt desc) [0...5] {
    title,
    slug,
    "date": coalesce(publishedAt,_createdAt),
    "image": mainImage
  },
}
`;
// Single Product Page
export const singleproductquery = groq`
*[_type == "product" && slug.current == $slug][0] {
  ...,
  body[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    }
  },
  brand[]->,
  productCategory[]->,
  "estReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  "related": *[_type == "product" && count(productCategory[@._ref in ^.^.productCategory[]._ref]) > 0 ] | order(publishedAt desc, _createdAt desc) [0...4] {
    ...,
    brand[]->,
    productCategory[]->,
  },
}
`;

// Get Products by Brand
export const productsbybrandquery = groq`
*[_type == "product" && $slug in brand[]->slug.current ] | order(publishedAt desc, _createdAt desc) [$pageIndex...$limit]  {
  ...,
  productCategory[]->,
  brand[]->,
}
`;

export const allbrandsquery = groq`
*[_type == "brand" ] {
  ...,
}
`;

// Get Products by Search
export const searchproductquery = groq`
*[_type == "product" && ( $search in brand[]->slug.current || $search in productCategory[]->slug.current || name match $search + "*" )] | order(publishedAt desc, _createdAt desc) [$pageIndex...$limit]  {
  ...,
  productCategory[]->,
  brand[]->,
}
`;

// Paths for generateStaticParams
export const pathquery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;
export const pathproductquery = groq`
*[_type == "product" && defined(slug.current)][].slug.current
`;
export const catpathquery = groq`
*[_type == "category" && defined(slug.current)][].slug.current
`;
export const authorsquery = groq`
*[_type == "author" && defined(slug.current)][].slug.current
`;
export const brandpathquery = groq`
*[_type == "brand" && defined(slug.current)][].slug.current
`;

// Get Posts by Authors
export const postsbyauthorquery = groq`
*[_type == "post" && $slug match author->slug.current ] {
  ...,
  author->,
  categories[]->,
}
`;

// Get Posts by Category
export const postsbycatquery = groq`
*[_type == "post" && $slug in categories[]->slug.current ] {
  ...,
  author->,
  categories[]->,
}
`;

// Get top 5 categories
export const catquery = groq`*[_type == "category"] {
  ...,
  "count": count(*[_type == "post" && references(^._id)])
} | order(count desc) [0...5]`;

export const searchquery = groq`*[_type == "post" && _score > 0]
| score(title match $query || excerpt match $query || pt::text(body) match $query)
| order(_score desc)
{
  _score,
  _id,
  _createdAt,
  mainImage,
  author->,
  categories[]->,
   title,
   slug
}`;

// Get all Authors
export const allauthorsquery = groq`
*[_type == "author"] {
 ...,
 'slug': slug.current,
}
`;

// get everything from sanity
// to test connection
export const getAll = groq`*[]`;
