import {  useParams , useNavigate} from "react-router-dom";
import {Formik, Form, Field,ErrorMessage} from 'formik';
import * as yup from 'yup';
const Login=()=>{
    var params=useParams();
    console.log(params,' is params');
    var {user}=params;
    var validationSchema = yup.object().shape({
        email: yup.string().required("Email is required").email("Enter valid Email"),
        password:yup.string().required("Password is required"),
        createdOn: yup.date().default(function () {
            return new Date();
                }),
            });
    const navigate=useNavigate();
    const handleSubmit=(values)=>{
            console.log(values);
            navigate('/');
        }
    return (
    <div> {user} LoggedIn 
    <div>
        
        <Formik initialValues={{email:"",password:""}}
        validationSchema={validationSchema}
        onSubmit={(values)=>handleSubmit(values)}>
            <Form>
                <label>Email: </label> <br />
                <Field type="email" name="email" ></Field> <p><ErrorMessage name="email"/></p> <br />
                <label>Password: </label> <br />
                <Field type="password" name="password"></Field><p><ErrorMessage name="password"/></p><br />
                <button type="submit" >Submit</button>
            </Form>
        </Formik>
    </div>
    </div>
    );

}
export default Login;