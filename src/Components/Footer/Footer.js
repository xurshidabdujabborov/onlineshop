import React from "react";
import { Container, Grid } from "@mui/material";
import "./Footer.css";
import logo from "../../img/onlineshoplogo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Container maxWidth="xl">
        <Grid container alignItems={"center"}>
          <Grid items md={4} sm={12} xs={12}>
            <div className="logo">
              <Link>
                {" "}
                <img src={logo} alt="jpg" style={{ height: "100px" }} />{" "}
              </Link>
            </div>
          </Grid>
          <Grid items md={4} sm={12} xs={12}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </Grid>
          <Grid items md={4} sm={12} xs={12}>
            <div className="right">
              <a href="https://www.instagram.com/a.xurshid07/">
                <InstagramIcon />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100088586816145">
                {" "}
                <FacebookIcon />
              </a>
              <a href="https://twitter.com/xurshidabdujabb">
                {" "}
                <TwitterIcon />
              </a>
              <a href="https://t.me/Xurwid_01">
                {" "}
                <TelegramIcon />
              </a>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
