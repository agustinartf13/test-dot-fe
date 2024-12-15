import ProductList from "@/components/ProductList";
import SidebarBanner from "@/components/SideBarBanner";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <main>
      <SidebarBanner/>
      <ProductList/>
    </main>
  );
}
