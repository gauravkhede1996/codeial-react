import {Formik,Form,Field,ErrorMessage} from 'formik';
import { createProduct } from '../api';
import * as yup from 'yup';
const FormPage=()=>{
    var validationSchema = yup.object().shape({
        productName: yup.string().required("Product Name is required"),
        productCategory:yup.string().required("Product Category is required"),
        productInfo:yup.string().required("Product Info is required"),
        price:yup.number().required("Price should be in number and can't be blank"),
        quantityAvailable:yup.number().required("Please Enter Quantity").positive("Please Enter valid quantity"),
        createdOn: yup.date().default(function () {
            return new Date();
                }),
            });
const handleSubmit=(values)=>{
    const addProduct=async ()=>{
        const response =await createProduct(values);
        console.log('response',response);
      }
      addProduct();
    }
    return(
        <div>
            <Formik initialValues={{email:"",password:""}}
        validationSchema={validationSchema}
        onSubmit={(values)=>handleSubmit(values)}>
            <Form>
                <label>Enter Product Name: </label> <br />
                <Field type="text" name="productName" ></Field> <p><ErrorMessage name="productName"/></p> <br />
                <label>Enter Product Category: </label> <br />
                <Field type="text" name="productCategory"></Field><p><ErrorMessage name="productCategory"/></p><br />
                <label>Enter Product Information: </label> <br />
                <Field type="text" name="productInfo"></Field><p><ErrorMessage name="productInfo"/></p><br />
                <label>Enter Product Price: </label> <br />
                <Field type="text" name="price"></Field><p><ErrorMessage name="price"/></p><br />
                <label>Enter Product Quantity Available: </label> <br />
                <Field type="text" name="quantityAvailable"></Field><p><ErrorMessage name="quantityAvailable"/></p><br />


                <button type="submit" >Submit</button>
            </Form>
        </Formik>
        </div>
    );
    }
export default FormPage;