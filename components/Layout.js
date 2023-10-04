import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="body">
      {/* nav */}
      <Navbar />
      {children}
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
