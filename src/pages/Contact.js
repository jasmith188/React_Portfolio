import React from "react";
import Image from "../images/citystreet.jpg";
import { Grid, Cell } from "react-mdl";
import "../App.css"


function Contact() {
  return (
    <div className="contact-body">
      <Grid className="row">
        <Cell col={6}></Cell>
        <Cell col={6}></Cell>
      </Grid>
    </div>
  );
}

export default Contact;