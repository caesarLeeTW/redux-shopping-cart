import { useSelector } from "react-redux";

import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = useSelector((state) => state.product.products);
  const ProductItems = products.map((product) => (
    <ProductItem
      key={product.id}
      productId={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
    />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{ProductItems}</ul>
    </section>
  );
};

export default Products;
