import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";
import BrandSlidder from "@/components/sections/brandSlidder";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default:
        settings?.title ||
        "RBNTECH Consumer Goods Trading ",
      template: "%s | RBNTECH"
    },
    description:
      settings?.description ||
      "RBNTECH Consumer Goods Trading (RCGT) is a national merchant trading, procurement and supply company.",
    keywords: ["Next.js", "Sanity", "Tailwind CSS"],
    authors: [{ name: "Ralf Quezar De Leon" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "RBNTECH",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <div className="h-full">
      <Navbar {...settings} />
      <div>{children}</div>
      <Footer {...settings} />
    </div>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
