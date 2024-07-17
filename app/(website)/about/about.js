import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About Us
      </h1>
      <div className="text-center">
        <p className="text-lg">RBNTECH, Your <span className="uppercase font-semibold">partner</span> in trade</p>
      </div>

      <div className="prose mx-auto mt-14 dark:prose-invert">
        <p>
          RBNTECH Consumer Goods Trading &#40;RCGT&#41; is a national merchant trading, procurement and supply company. We trade broad spectrum commodities across industrial and corporate markets.
        </p>
        <p>
          Alongside trading commodities, we are a specialized multidiscipline procurement and supply company, delivering a complete single source procurement solution to our customers nationwide. We supply all types of materials for construction, infrastructure, production and manufacturing, mining and corporate sectors. Our team of experienced professionals tailor solutions to assist customers with their specific requirement, ensuring products and goods can be purchased on the terms that best match their business cycles.
        </p>
        <p>
          We aspire to build good relationship with our customers with a
          mission to create a long-term and sustained partnerships built
          on shared values of trust and consistency.
        </p>
      </div>

      <article className="prose grid grid-cols-2 mx-auto text-center gap-5 pt-10">
        <div>
          <header>
            <h4 className="uppercase text-xl font-bold">vision</h4>
          </header>
          <section>
            <p className="text-center">
            To build a long-term relationship and provide essential value supply chain to our customers in order to advance and overcome the obstacles of doing national and international trade.
            </p>
          </section>
        </div>
        <div>
          <header>
            <h4 className="uppercase text-xl font-bold">mission</h4>
          </header>
          <p className="text-center">
            To be the most reliable merchant trading, procurement and supply company by providing wide range, high quality products to various sectors nationwide and global markets.
          </p>
        </div>
        <div className="text-center mx-auto col-span-2 space-y-2">
          <header>
            <h4 className="uppercase text-xl font-bold ">core values</h4>
          </header>
          <section>
            <p className=" text-center tracking-wide">
              LOYALTY | RELIABILITY | INTEGRITY | QUALITY | TRUST
            </p>
          <p className="text-center my-10">
            <Link href="/contact" className="underline"> Get in touch</Link>
          </p>
          </section>
        </div>
      </article>
    </Container>
  );
}
