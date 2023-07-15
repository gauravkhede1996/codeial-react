import { useSelector } from "react-redux";
import LoginAnt from '../components/loginAnt';
import {Upload,Button} from'antd';
import {uploadPhoto} from '../api'
import "../styles/userHome.css";
const UserHome=()=>{
    const currentUser=useSelector(state=> state.currentUser);
    const handleUpload=(event)=>{
        const updatePhoto=async ()=>{
            const list= URL.createObjectURL(event.fileList[0]);
            console.log(list," is the url")
            const file=event.fileList[0];
            // console.log(typeof file.thumbUrl);
            const formData=new FormData();
            formData.append("avatar",file);
            console.log(formData);
            // console.log(formData,"  is the data of the form");
            // // let formDataFileObject;
            // for (var key of formData.entries()) {
            //     console.log(key[0]);
            //     // formDataFileObject=key;
            // }
            const response =await uploadPhoto(formData);
            console.log(typeof response);
            console.log('response',response);
          }
          updatePhoto();
        
        
    }
    
    return(

        <div>
            {currentUser.loggedIn?
            <div> 
                <Upload.Dragger
                listType="picture"
                accept=".jpeg"
                name="avatar"
                beforeUpload={(file)=>{
                    if(file.size>600000){
                        console.log(file.size," inner");
                        return true;
                    }
                    console.log(file.size," outerss")
                    console.log(file," is the file");
                    return false;
                }}
                onChange={(event)=>handleUpload(event)}
                >
                    Drag Files here OR <br />
                    <Button >Click to Upload</Button>
                </Upload.Dragger>
                
            </div>
            : <div> <LoginAnt/></div>}
            {/* Code for chatBo and It is absolute in position */}
            <div className="chat-box-container"> 
                <div className="message-container">
                    <ul style={{padding:"0px"}}>
                        <li >
                            <span className="other-message"> His/Her Message</span>
                        </li>
                        <li>
                            <span className="self-message"> My Message</span>
                        </li>
                    </ul>
                    
                    </div> 
                <div className="form-container">
                    <input type="text" style={{width:"10rem"}}/>
                    <Button style={{marginTop:"1.6rem",marginLeft:"0.5rem"}}>Send</Button>
                    </div>
                </div>
            
        </div>
    )
}
export default UserHome;