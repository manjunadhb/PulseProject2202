import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";
function SignUp() {
  let navigate = useNavigate();
  return (
    <div className='maindiv'>
      <div>
    <img
        src="https://pulse.brninfotech.com/pulse/assets/admin/layout/img/logo-big.png"
        alt = "Student Photo"
        className='brnLogo'
      ></img>
      </div>
    <div className='containerSignup'>
      <h1 style={{color:'green'}}>Sign Up</h1>
        <p>Enter your name exactly as per your certificates</p>
        <div>
            <input type="text" placeholder='Name as per certificates' required className='label1'></input><br></br><br></br>
        </div>
        <div>
        <div>
            <label className='label1'>Gender: </label>
            <input type='radio'  value='Male' name='Gender'></input>
            <label>Male</label>
            <input type='radio' id='female' value='Female' name='Gender'></input>
            <label>Female</label><br></br><br></br><br></br>
        </div>
        <div>
        <label className='label1'>Marital Status: </label>
            <input type='radio' id='Single' value='Single' name='>Marital Status'></input>
            <label>Single</label>
            <input type='radio' id='Married' value='Married' name='>Marital Status'></input>
            <label>Married</label><br></br><br></br>
        </div>
        <div>
            <input className='label1' type="number" placeholder='Mobile No'></input>
        </div>
        <div>
            <input className='label1' type="text" placeholder='City/Town'></input><br></br><br></br>
        </div>
            <select className='label1'id="state" name="state">
               <option>select your state</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Orissa">Orissa</option>
                <option value="Pondicherry">Pondicherry</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttaranchal">Uttaranchal</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="West Bengal">West Bengal</option>

            </select>
          </div>
          <p>Enter your account details below:</p>
          <div>
              <input className='label1' type = 'text' placeholder='E-mail address'></input><br></br><br></br>
          </div>
          <div>
              <input type = 'password' className='label1' placeholder='Password'></input><br></br><br></br>
          </div>
          <div>
              <input type = 'password' className='label1' placeholder='Re-type password'></input><br></br><br></br>
          </div>
          <div>
              <input type="checkbox" name="agree"></input>
              <label style={{color:'green'}}>I Agree With <a href = "https://docs.google.com/document/d/1UNc8jOJtjQJttCxogPfFQcXFl6gNm8iuOwiRfbkmXcw/edit">Terms And Conditions</a></label>
          </div><br></br>

          <div>
              <button type="submit" className = "buttonBack"
              onClick={() =>
               {
                    navigate("/")}}>BACK</button>
              <button type="submit"className="buttonSubmit" onClick={() => 
              {         
                        alert("Your Details Are Submitted Successfully");
                        navigate("/")}}>SUBMIT</button>
            </div>
    </div>
    </div>
  )
}

export default SignUp