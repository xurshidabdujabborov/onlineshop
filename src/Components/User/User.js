import React from 'react'
import { Container, Checkbox } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import "./User.css"

function User() {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className='Login'>
         <Container maxWidth="xl">
        <h3>Sigin up</h3>
        <form action="#">
          <button>
          <GoogleIcon />
           Sigin in With Google
          </button>
          <button>
          <FacebookIcon />
           Sigin in With Facebook
          </button>
          <input type="text" placeholder='Username' />
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Password" />
          <p>
            
            <Checkbox {...label} defaultChecked /> Check me out
          </p>
          <button>Register</button>
        </form>
      </Container>
    </div>
  )
}

export default User