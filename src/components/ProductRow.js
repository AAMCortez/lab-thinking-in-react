function ProductRow(props) {
    const product = props.product;
    const style = {
      color: product.inStock ? 'black' : 'red',
    };
  
    return (
      <tr>
        <td style={style}>{product.name}</td>
        <td>{product.category}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
  
  export default ProductRow;