import styles from "./page.module.css";
import { FilterProvider } from "@/components/FilterProvider";
import CategoryFilter from "@/components/CategoryFilter";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <FilterProvider>
      <main className={styles.main}>
        <CategoryFilter />
        <ProductList />
      </main>
    </FilterProvider>
  );
}
