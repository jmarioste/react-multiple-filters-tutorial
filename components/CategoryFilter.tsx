"use client";
import products from "@/products.json";
import { Operators, useFilters } from "./FilterProvider";

// get all categories
const categories = Array.from(new Set(products.map((p) => p.category)));

const CategoryFilter = () => {
  const { filters, setFilters } = useFilters();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    category: string
  ) => {
    if (e.target.checked) {
      // add filter condition if checked
      setFilters([...filters, ["category", Operators.equal, category]]);
    } else {
      // remove filter condition if uncheckd
      const newValue = filters.filter((condition) => condition[2] !== category);
      setFilters(newValue);
    }
  };
  return (
    <div>
      {categories.map((category, i) => {
        const checked = filters.some((condition) => {
          const [field, operator, value] = condition;
          return value === category && field === "category";
        });

        return (
          <div key={i}>
            <input
              type="checkbox"
              id={`input-${category}`}
              onChange={(e) => handleChange(e, category)}
              checked={checked}
            />
            <label htmlFor={`input-${category}`}> {category}</label>
          </div>
        );
      })}
    </div>
  );
};
export default CategoryFilter;
