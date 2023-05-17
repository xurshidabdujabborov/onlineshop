import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import sms from "../../img/sms.jpg"
import "./Contact.css";

function Contact() {
  const [inp1 , setInp1] = useState('')
  const [inp2 , setInp2] = useState('')
  const [inp3 , setInp3] = useState('')
  const navigate = useNavigate();
  const sendData = async (e) => {
    e.preventDefault()
    const data = {
        inp1,
        inp2,
        inp3,
    };
    if(inp1 == "" && inp1 == "" && inp3 == ""){
        navigate("/")
    }else{
        setInp1("");
        setInp2("");
        setInp3("");
        navigate("/")
    }
};

  return (
    <div className="Contact">
      <Container>
        <h3>Have Some Question?</h3>
        <Grid container alignItems={"center"}>
          <Grid items md={6} sm={6} xs={12}>
            <div className="left">
              <img style={{width: '300px' , height: '300px'}} src={sms} alt="" />
            </div>
          </Grid>
          <Grid items md={6} sm={6} xs={12}>
            <form action="#">
              <p>Full Name</p>
              <input type="text" required onChange={(e) => setInp1(e.target.value)} placeholder="Abdujabborov Xurshid" />
              <p>Email address</p>
              <input type="text" required onChange={(e) => setInp2(e.target.value)} placeholder="officila@gmail.com" />
              <p>Example textarea</p>
              <textarea required onChange={(e) => setInp3(e.target.value)}></textarea>
             <button  onClick={sendData}>Send Message</button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Contact;
