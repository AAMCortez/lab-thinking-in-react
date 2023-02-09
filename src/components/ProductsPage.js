import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import { useState } from 'react';
import jsonData from '../data.json';

function ProductsPage(props) {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('');

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <h1>IronStore</h1>
      <SearchBar search={search} onSearchChange={handleSearchChange} />
      <ProductTable products={products} search={search} />
    </>
  );
}

export default ProductsPage;
