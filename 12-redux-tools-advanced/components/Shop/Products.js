import ProductItem from './ProductItem';
import classes from './Products.module.css';

const EXAMPLE_PRODUCTS = [
  { id: 'p1', title: 'My First Book', price: 6, description: 'The first book I ever Wrote' },
  { id: 'p2', title: 'My Second Book', price: 5, description: 'The second book I ever Wrote' },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {EXAMPLE_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
