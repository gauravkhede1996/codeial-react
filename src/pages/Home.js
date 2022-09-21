import '../styles/Home.css';
import {deleteProduct, getProducts,updateProduct} from '../api'
import { useEffect, useState } from 'react';
import { Container, Row, Card,Col ,Button,Modal} from 'react-bootstrap';
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
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
    return <Col md={4}><Card className="mt-2 ms-2 mb-2 me-2 p-1 ">
    <Card.Body className="lightGreen">
      <Card.Header >
      <Card.Title className="d-inline ">{product.productName} </Card.Title> <span className='pull-right'><Button variant="none" onClick={()=>deleteButton(product._id)}><img src="https://cdn-icons-png.flaticon.com/512/6460/6460112.png" alt="deleteButton" style={{height:"25px"}}/></Button></span>
      <Card.Subtitle className='text-secondary'>{product.productCategory}</Card.Subtitle>
      </Card.Header>
       
      <Card.Text className='mt-3'>
      price:{product.price} <br/>
      Quantity Available : {product.quantityAvailable}  <br/>
      Product Information: {product.productInfo} <br/>
      </Card.Text>
      <Button type="submit" variant='secondary' onClick={showModal}> Update this Product </Button>
    </Card.Body>
   
  </Card> 
  </Col>
  }
  return (
    <Container>
      
        
        <div style={{minHeight:"100vh"} } className='backgroundColor'>
      
        <Row>
        {result.map(element=>{
         return element.data.map(product=>{
            return  renderProduct(product); 
          })
          
        })}
        </Row>
       
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
    </Container>
    
  
      
      );
    }
export default Home;