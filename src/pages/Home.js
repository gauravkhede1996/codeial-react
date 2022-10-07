import '../styles/Home.css';
import {deleteProduct, getProducts,updateProduct} from '../api'
import { useEffect, useState } from 'react';
import {Button,Modal} from 'react-bootstrap';
import {Row,Col} from 'antd';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as yup from 'yup';
import {Card,Space} from 'antd';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';
const {Meta }= Card;


const Home=()=>{
  // const products=props.data;
  // const renderRow=()=>{

  // }
  var validationSchema = yup.object().shape({
    productName: yup.string("Please Enter a string").required("Product Name is required"),
    productCategory:yup.string().required("Product Category is required"),
    productInfo:yup.string().required("Product Info is required"),
    price:yup.number("Enter Number").positive("Enter Valid Price").required("Price should be in number and can't be blank"),
    quantityAvailable:yup.number("Enter Number").positive("Enter Valid Quantity").required("Please Enter Quantity"),
    createdOn: yup.date().default(function () {
        return new Date();
            }),
        });
  const [show,setShow]=useState(false);
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
  const closeButtonHandler=(show)=>{
      return setShow(!show);
  }
  const showModal=()=>{
    return setShow(!show);
  }
  const navigate=useNavigate();
  const handleSubmit=(values)=>{
    const updateProductFunction=async ()=>{
      const response =await updateProduct(values);
      console.log('response',response);
      return navigate('/');
    }
    updateProductFunction();
  }
  const deleteButton=(productId)=>{
    const deleteProductFunction=async ()=>{
      const response =await deleteProduct(productId);
      console.log('response',response);
      return navigate('/');
    }
    deleteProductFunction();
  }
  const renderProduct=(product)=>{
    return <Space direction="vertical"><Col className="gutter-row"><Card title={product.productName} hoverable extra={<span className='pull-right'><Button variant="none" onClick={()=>deleteButton(product._id)} ><img src="https://cdn-icons-png.flaticon.com/512/6460/6460112.png" alt="deleteButton" style={{height:"25px"}}/></Button></span>} style={{backgroundColor:"rgb(202,234,233)"}}>
      
      <Meta description={product.productCategory} />
      price:{product.price} <br/>
      Quantity Available : {product.quantityAvailable}  <br/>
      Product Information: {product.productInfo} <br/>
      <Button type="submit" variant='secondary' onClick={showModal}> Update this Product </Button>
    </Card>
    
    </Col>
    </Space>
  }
  return (
    <div >
      
        
        <div style={{minHeight:"100vh", padding:"24px"} } className='backgroundColor' id="container" >
        <Space direction="vertical">
        <Row gutter={[16,16]} >
        
        {result.map(element=>{
         return element.data.map(product=>{
            return  renderProduct(product); 
          })
          
        })}
        
        </Row>
        </Space>
        
       
       {console.log(result," is the result from home component")}
      </div>
      
      <Modal show={show} onHide={()=>closeButtonHandler(show)}>
                <Modal.Header closeButton>
                <Modal.Title>Add New Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Formik initialValues={{productName:"",productCategory:"",productInfo:"",price:0,quantityAvailable:0}}
                    validationSchema={validationSchema}
                    onSubmit={(values)=>handleSubmit(values)}>
            
                    <Form>
                        <Field type="hidden"  name="productName" className="twentyFiftyPercent increaseWidthBy16 mt-2"></Field> <br />
                        <label className="twentyFiftyPercent increaseWidthBy16">Enter Product Category: </label> <br />
                        <Field type="text" name="productCategory" className="twentyFiftyPercent increaseWidthBy16 mt-2"></Field><p className="twentyFiftyPercent increaseWidthBy16"><ErrorMessage name="productCategory"/></p><br />
                        <label className="twentyFiftyPercent increaseWidthBy16">Enter Product Information: </label> <br />
                        <Field type="text" name="productInfo"  className="twentyFiftyPercent increaseWidthBy16 mt-2"></Field><p className="twentyFiftyPercent increaseWidthBy16"><ErrorMessage name="productInfo"/></p><br />
                        <label className="twentyFiftyPercent increaseWidthBy16">Enter Product Price: </label> <br />
                        <Field type="text" name="price"  className="twentyFiftyPercent increaseWidthBy16 mt-2"></Field><p className="twentyFiftyPercent increaseWidthBy16"><ErrorMessage name="price"/></p><br />
                        <label className="twentyFiftyPercent increaseWidthBy16">Enter Product Quantity Available: </label> <br />
                        <Field type="text" name="quantityAvailable" className="twentyFiftyPercent increaseWidthBy16 mt-2"></Field><p className="twentyFiftyPercent increaseWidthBy16"><ErrorMessage name="quantityAvailable"/></p><br />
                        <button type="submit" className="fourtyFivePercent">Submit</button>
                    </Form>
                </Formik>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" onClick={()=>closeButtonHandler(show)}> Close</Button>
                </Modal.Footer>
            </Modal>
    </div>
    
  
      
      );
    }
export default Home;