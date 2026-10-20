import Header from "@features/site-layout/components/header";
import Footer from "@features/site-layout/components/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
  <>
    <header><Header /></header>
    <main>{children}</main>
    <Footer />
  </>
  );
};

export default Layout;
