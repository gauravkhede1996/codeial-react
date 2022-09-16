import {Formik,Form,Field,ErrorMessage} from 'formik';
import { createProduct } from '../api';
import { useState } from 'react';
// import * as yup from 'yup';
const FormPage=()=>{
    const [productName,setProductName]=useState("");
    const [productCategory,setProductCategory]=useState("");
    const [productInfo,setProductInfo]=useState("");
    const [price,setPrice]=useState(0);
    const [quantityAvailable,setQuantityAvailable]=useState(0);
    // var validationSchema = yup.object().shape({
    //     productName: yup.string("Please Enter a string").required("Product Name is required"),
    //     productCategory:yup.string().required("Product Category is required"),
    //     productInfo:yup.string().required("Product Info is required"),
    //     price:yup.number().required("Price should be in number and can't be blank"),
    //     quantityAvailable:yup.number().required("Please Enter Quantity"),
    //     createdOn: yup.date().default(function () {
    //         return new Date();
    //             }),
    //         });
const handleSubmit=(values)=>{
    const addProduct=async ()=>{
        let data={productName,productCategory,productInfo,price,quantityAvailable};
        const response =await createProduct(data);
        console.log('response',response);
      }
      addProduct();
    }

    return(
        <div>
            <Formik initialValues={{productName:"",productCategory:"",productInfo:"",price:0,quantityAvailable:0}}
        // validationSchema={validationSchema}
        onSubmit={(values)=>handleSubmit(values)}>
            
            <Form>
                <label>Enter Product Name: </label> <br />
                <Field type="text"  onChange={(e)=>{setProductName(e.target.value) }}  value={productName} name="productName"></Field> <p><ErrorMessage name="productName"/></p> <br />
                <label>Enter Product Category: </label> <br />
                <Field type="text" name="productCategory" value={productCategory} onChange={(e)=>{ setProductCategory(e.target.value)}}></Field><p><ErrorMessage name="productCategory"/></p><br />
                <label>Enter Product Information: </label> <br />
                <Field type="text" name="productInfo" value={productInfo} onChange={(e)=>{ setProductInfo(e.target.value)}}></Field><p><ErrorMessage name="productInfo"/></p><br />
                <label>Enter Product Price: </label> <br />
                <Field type="text" name="price" value={price} onChange={(e)=>{ setPrice(e.target.value)}}></Field><p><ErrorMessage name="price"/></p><br />
                <label>Enter Product Quantity Available: </label> <br />
                <Field type="text" name="quantityAvailable" value={quantityAvailable} onChange={(e)=>{ setQuantityAvailable(e.target.value)}}></Field><p><ErrorMessage name="quantityAvailable"/></p><br />


                <button type="submit" >Submit</button>
            </Form>
        </Formik>
        
        </div>
    );
    }
export default FormPage;