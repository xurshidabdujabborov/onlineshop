import React from 'react'
import { Container } from "@mui/material"
import "./About.css"
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='About'>
        <Container maxWidth="xl">
            <div className="left">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo molestiae earum rem doloremque, nihil delectus ullam error consectetur? Dicta, non exercitationem in consectetur totam dolorum at voluptate laudantium aliquam, officiis perspiciatis molestias reiciendis consequuntur ullam perferendis velit blanditiis distinctio assumenda a maxime reprehenderit atque. Nam eius rerum distinctio, a illo earum, optio molestias nostrum maxime quibusdam delectus, adipisci impedit? Nam corporis reiciendis minus quod eaque, laborum veritatis voluptatibus id maiores tempore accusantium recusandae perspiciatis, officia cum ad maxime fuga repellendus a magni consequatur. Unde adipisci hic provident est sint corporis, dolorem esse autem soluta molestiae optio quisquam eligendi obcaecati minima?</p>
                <Link to="/contact">Contact Us</Link>
            </div>
        </Container>
    </div>
  )
}

export default About