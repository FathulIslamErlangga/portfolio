import Footer from "@/components/Footer/page";
import HeroPage from "@/components/Hero/page";
import Navbar from "@/components/Navbar/page";
import Portfolio from "@/components/Protfolio/page";

// import Navbar from "@/components/Navbar/page";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <Portfolio />
      <Footer />
    </>
  );
}
