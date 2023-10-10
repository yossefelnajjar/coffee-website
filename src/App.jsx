import { Outlet, Route, Routes} from "react-router-dom";
import Home     from "./pages/Home";
import Product  from "./pages/Product";
import Products from "./pages/Products";
import Cart     from "./pages/Cart";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function App() {

  return (
    <>
      <Header />

      <main className="sm:mx-0 xl:mx-32 2xl:mx-64 mt-28">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/:productType" element={<Outlet />}>
            <Route path="" element={<Products />} />
            <Route path="filter/:filterType" element={<Products />} />
            <Route path=":theProduct" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
