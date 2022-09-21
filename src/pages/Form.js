import {Formik,Form,Field,ErrorMessage} from 'formik';
import { createProduct } from '../api';
import { useNavigate } from 'react-router-dom';
import {Button,Modal} from 'react-bootstrap';
import * as yup from 'yup';
import { useState } from 'react';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';
// import * as yup from 'yup';
const FormPage=()=>{

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
    const navigate=useNavigate();
    const handleSubmit=(values)=>{
    const addProduct=async ()=>{
        const response =await createProduct(values);
        console.log('response',response);
        return navigate('/');
      }
      addProduct();
    }
    const closeButtonHandler=(show)=>{
        console.log(show);
        return setShow(!show);
    }

    return(
        <div>
            <Button type="submit" className="mt-2 mb-2" onClick={()=>closeButtonHandler(show)}> Add Data</Button>
            <DatePicker/>
            <Modal show={show} onHide={()=>closeButtonHandler(show)}>
                <Modal.Header closeButton>
                <Modal.Title>Add New Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Formik initialValues={{productName:"",productCategory:"",productInfo:"",price:0,quantityAvailable:0}}
                    validationSchema={validationSchema}
                    onSubmit={(values)=>handleSubmit(values)}>
            
                    <Form>
                        <label className="twentyFiftyPercent increaseWidthBy16">Enter Product Name: </label> <br />
                        <Field type="text"  name="productName" className="twentyFiftyPercent increaseWidthBy16 mt-2"></Field> <p className="twentyFiftyPercent increaseWidthBy16"><ErrorMessage name="productName"/></p> <br />
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
export default FormPage;