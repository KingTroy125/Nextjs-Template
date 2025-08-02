import Image from "next/image";
import Navbar from "@/components/sections/navbar/default";
import Hero from "@/components/sections/hero/default";
import FooterSection from "@/components/sections/footer/default";
import CTA from "@/components/sections/cta/box";
import Logo from "@/components/sections/logos/default";
import FAQ from "@/components/sections/faq/default";
import Pricing from "@/components/sections/pricing/default";
import Items from "@/components/sections/items/default";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Logo />
      <Items />
      <Pricing />
      <FAQ />
      <CTA />
      <FooterSection />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Your page content goes here */}
      </main>
    </div>
  );
}
