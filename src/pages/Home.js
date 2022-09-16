import '../styles/Home.css';
import {getProducts} from '../api'
import { useEffect, useState } from 'react';
const Home=()=>{
  // const products=props.data;
  // const renderRow=()=>{

  // }
  const [result,setResult]=useState([]);
  useEffect(()=>{
    const fetchProducts=async ()=>{
      const response =await getProducts();
      await setResult([response]);
      console.log(typeof response);
      console.log('response',response);
    }
    fetchProducts();
  },[]);
  const renderProduct=(product)=>{
    return <tr>
      <td>{product.productName}</td>
      <td> {product.productCategory}</td>
      <td>{product.price}</td>
      <td>{product.quantityAvailable}</td>
      <td> {product.productInfo}</td>
    </tr>
  }
  return (
    <div>
      <table>
        <tr>
          <th>Product Name</th>
          <th>Product Category</th>
          <th>Product Price</th>
          <th>Product Quantity</th>
          <th>Product Information</th>
        </tr>
        {result.map(element=>{
         return element.data.map(product=>{
            return renderProduct(product);
          })
          
        })}
       </table>
       {console.log(result," is the result from home component")}
      </div>
      
      );
    }
export default Home;