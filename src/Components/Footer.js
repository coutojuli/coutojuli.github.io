import React from 'react';
import '../styles.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import Grid from '@material-ui/core/Grid';

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <Grid container spacing={2}>
          <Grid xs={4}>
            <div className="footer-left">          
              <p>© 2021 Juliana Claussen.</p>
              <p>All rights reserved.</p>
            </div>
          </Grid>
          <Grid xs={4}>
            <div className="footer-middle">
              <h2>General Inquiries:</h2>
              <p> juliana.correa.couto@gmail.com</p>
            </div>
          </Grid>
          <Grid xs={4}>
            <div className="footer-right">
              <h1>Connect with me:</h1>          
              <ul>
                <li><a target="_blank" href="https://www.linkedin.com/in/juliana-claussen" rel="noreferrer"><LinkedInIcon fontSize="large"/></a></li>
                <li><a target="_blank" href="https://github.com/coutojuli" rel="noreferrer"><GitHubIcon fontSize="large"/></a></li>
                <li><a target="_blank" href="https://www.facebook.com/coutojuli" rel="noreferrer"><FacebookIcon fontSize="large"/></a></li>
              </ul>     
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;