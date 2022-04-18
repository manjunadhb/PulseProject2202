import React, { useRef } from 'react'
import{useNavigate} from 'react-router-dom';

function Forgotpassword() {
    let forgetPasswordInput=useRef();
    let mailInput="";
    let navigate = useNavigate(); 

    let password = () => {
        let forgetPassword = forgetPasswordInput.current.value;

       if(forgetPassword==mailInput){
         alert("Please enter mail or phone number")
       }
       else{
       alert("sucessfully submitted");
       navigate('/')
       }
       
    }
    

  return (
    <div className='mainContainerForgetpswrd'>
    
      <center>
        <img className='brnlogo' src="https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo-big.png"></img><br></br><br></br>

        
    <div className='card'>
      <h2 className='text'>Forgot password?</h2>
     <input type='text' ref={forgetPasswordInput} placeholder=' Enter your mail or Phone number' style={{textAlign:'center',fontSize:'medium', width:'260px',border:'none',height:'40px'}}></input><br></br><br></br>

        <button className='submit' onClick={()=>
            {
            password() 
            }}> Submit</button>


        <button className='cancel' onClick={()=>
        {
          alert("submission cancelled")
        }}>Cancel</button>     
      </div>
      
      <br></br><br></br>

     <div className='tag'>
     <a href="https://www.brninfotech.com/" className='ankerCss'>2022 © BRN Infotech Pvt. Ltd. </a>
     </div>
     </center>
     <br></br>
     <br></br>
    
    
      </div>
  )
}

export default Forgotpassword