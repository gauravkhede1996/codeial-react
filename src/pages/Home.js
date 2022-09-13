import '../styles/Home.css';
const Home=(props)=>{
  // const products=props.data;
  // const renderRow=()=>{

  // }
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
        {props.data.map(product=>{
          return renderProduct(product);
        })}
       </table>
      
      </div>
      );
    }
export default Home;