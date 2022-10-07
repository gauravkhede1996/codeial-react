import {Row,Col,Card, Affix, Divider, Space} from 'antd';
import {Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import {Form, Input,Checkbox,Button} from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {login} from '../features/userSlice';
import { useState,useEffect } from 'react';
import allActions from '../actions';
const LoginAnt=()=>{
    const navigate=useNavigate();
    const currentUser = useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const onFinish=(values)=>{
        console.log(values);
        
        setPassword(values.password);
        dispatch(allActions.userActions.setUser({email}));
        return navigate('/UserHome');

    }
    const onFinishFailed=(errorInfo)=>{

    }
    return(
        <div style={{padding:"24px"}}>
            <Row gutter={[84,16]}>
                <Col >
                <Card hoverable title="SignUp" span={6} >
                    <Form name="basic" labelCol={{
                            span: 8,
                        }}
                            wrapperCol={{
                                span: 16,
                            }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off">
                    <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                        >
                            <Input />
                    </Form.Item>
                    <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                        </Form>
                        <Affix style={{ position: 'absolute', top: 305, left: 130 }}>
                        <Button ghost disabled >
                            OR
                            </Button>
                        </Affix> 
                        <Row gutter={[16,16]}>
                        <Col span={22}>
                        <hr /> 
                        
                        </Col>
                            <Col span={24}>
                            <Space size={5} >
                        <span style={{marginLeft:"5rem"}}><img alt="googleIcon" src="https://cdn-icons-png.flaticon.com/512/2965/2965278.png" style={{height:"25px"}}/></span>
                        <span><img alt="fbIcon" src="https://cdn-icons-png.flaticon.com/512/3128/3128304.png" style={{height:"25px"}}></img></span>
                        <span><img alt="linkedinIcon" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" style={{height:"25px"}}/></span>
                            </Space>
                            </Col>
                            <Col>
                            Already an Account? <Link to="/signup"> LogIn </Link>
                            </Col>
                        </Row>
                        
                </Card>
                </Col>
                <Col>
                <Card hoverable title="LogIn" span={6} >
                    <Form name="basic2" labelCol={{
                            span: 8,
                        }}
                            wrapperCol={{
                                span: 16,
                            }}
                        initialValues={{
                            remember: true,
                        }}
                        onSubmit={e => e.preventDefault()}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off">
                    <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                            ]}
                            onChange={(e)=>{return setEmail(e.target.value)}}
                        >
                            <Input />
                    </Form.Item>
                    <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ]}
                        >
                            <Input.Password />
                    </Form.Item>
                    
                    <Form.Item
                        wrapperCol={{
                        offset: 8,
                        span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                        </Form>
                        <Affix style={{ position: 'absolute', top: 305, left: 130 }}>
                        <Button ghost disabled >
                            OR
                            </Button>
                            
                        </Affix> 
                        <Row gutter={[16,16]}>
                        <Col span={22}>
                        <hr /> 
                        
                        </Col>
                            <Col span={24}>
                            <Space size={5} >
                        <span style={{marginLeft:"5rem"}}><img alt="googleIcon" src="https://cdn-icons-png.flaticon.com/512/2965/2965278.png" style={{height:"25px"}}/></span>
                        <span><img alt="fbIcon" src="https://cdn-icons-png.flaticon.com/512/3128/3128304.png" style={{height:"25px"}}></img></span>
                        <span><img alt="linkedinIcon" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" style={{height:"25px"}}/></span>
                            </Space>
                            </Col>
                            <Col>
                            Already an Account? <Link to="/signup"> LogIn </Link>
                            </Col>
                        </Row>
                        
                </Card>    
                </Col>
            </Row>
        </div>
    )
}
export default LoginAnt;