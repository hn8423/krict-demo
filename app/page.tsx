import TopUtilityBar from "@/components/krict/TopUtilityBar";
import Header from "@/components/krict/Header";
import Hero from "@/components/krict/Hero";
import PopupSection from "@/components/krict/PopupSection";
import QuickMenu from "@/components/krict/QuickMenu";
import SiteFooter from "@/components/krict/SiteFooter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <TopUtilityBar />
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <PopupSection />
      </main>
      <QuickMenu />
      <SiteFooter />
    </div>
  );
}
