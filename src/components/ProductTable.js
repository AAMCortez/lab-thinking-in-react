import ProductRow from './ProductRow';

function ProductTable(props) {
    const filteredProducts = props.products.filter((product) => {
      return (
        product.name.toLowerCase().indexOf(props.search.toLowerCase()) !== -1
      );
    });
  
    const productRows = filteredProducts.map((product) => {
      return <ProductRow product={product} key={product.id} />;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{productRows}</tbody>
      </table>
    );
  }

export default ProductTable;