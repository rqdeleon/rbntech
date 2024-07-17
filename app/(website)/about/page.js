import { getSettings } from "@/lib/sanity/client";
import About from "./about";

export default async function AboutPage() {
  const settings = await getSettings();
  return <About settings={settings} />;
}

// export const revalidate = 60;
