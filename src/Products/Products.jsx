import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table} from 'antd';
import { columns } from './ProductsTable';
import './Products.css';




const Products = () => {

  const [products, setProducts] = useState([]);
  const [loading , setLoading] = useState(false);
  const [filtering , setFiltering] = useState(false);
  const [searchInput , setSearchInput] = useState('');
  const [filteredProducts , setFilteredProducts] = useState([]);


  useEffect(() => {
    setLoading(true)
    const config = {
      headers: { 
        Authorization: `Bearer ${sessionStorage.getItem("Authtoken")}`
      }
    };

    axios.get(`https://toko.ox-sys.com/variations`, config)
    .then(res => setProducts(res.data.items))
    .then(() => setLoading(false))
    .catch(err => console.log(err));
  }, [])


  useEffect(() => {
    
    setFilteredProducts(products.filter(product => product.productName.toLowerCase().includes(searchInput.toLowerCase())));

  }, [searchInput])


  const onSearchHandler = (e) => {
    setFiltering(true);
    setSearchInput(e.target.value);
    if(e.target.value === ""){
      setFiltering(false)
    }
  }

  return (
    <div>
      <div className='search-bar'>
        <label>Search Product</label>
        <input type="text" placeholder='Product name' onChange={onSearchHandler} />
      </div>

      {
        loading ? <h1>Loading ...</h1>
        :
      <>
      {
        filtering ? 
        <>
        {
          filteredProducts.length > 0 ?  <Table dataSource={filteredProducts} columns={columns} rowKey="id" />
          : <h2>Product Not Found</h2>
        }
        </>:
        <>
        <Table dataSource={products} columns={columns} rowKey="id" />;
        </>
      }
      </>  
    }

    </div>
  )
}

export default Products