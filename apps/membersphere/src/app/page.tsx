import Homepage from "@features/home/components/homepage";
import Header from "@features/site-layout/components/header";
import Footer from "@features/site-layout/components/footer";

export default function Home() {
  return (
    <>
      <header><Header /></header>
      <main><Homepage /></main>
      <Footer />
    </>
  );
}
