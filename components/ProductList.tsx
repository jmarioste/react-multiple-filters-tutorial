"use client";
import { useEffect, useState } from "react";
import { useFilters } from "./FilterProvider";
type Product = {
  productName: string;
  category: string;
  price: string;
};

const ProductList = () => {
  const [data, setData] = useState<Product[]>([]);
  const { filters } = useFilters();

  useEffect(() => {
    // 1.compose the url
    const url = new URL("http://localhost:3000/api/products");

    // 2. add a filter parameter if there are multiple filter conditions
    const filterStr = filters
      .map((condition) => {
        const [field, operation, value] = condition;
        return `${field}-${operation}-${value}`;
      })
      .join(",");

    if (!!filters.length) {
      url.searchParams.append("filters", filterStr);
    }
    // here's an example url with filters applied:
    // http://localhost:3000/api/products?filters=category-eq-Computers%2Ccategory-eq-Toys%2Ccategory-eq-Tools

    // 3. use fetch to get the data
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((products: Product[]) => {
        setData(products);
      });
  }, [filters]);
  return (
    <div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  );
};
export default ProductList;
