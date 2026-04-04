import Header from "./Header";
import Footer from "./Footer";
import LocalBusinessJsonLd from "./LocalBusinessJsonLd";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <LocalBusinessJsonLd />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
