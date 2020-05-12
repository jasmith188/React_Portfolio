import React from 'react';
import Image from "../images/notetaker.jpg"
import Thumbnail from "../components/Thumbnail"

function Projects() {
  return (
    // Render a Thumbnail component
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="/twitter"
        img className="bioPicture" src={Image} alt={"Error"} height="550px" width="470px"
        title="NoteTaker App"
        category="Mobile App"
      />

      {/* <Thumbnail
        link="/airbnb"
        image="http://airbnb-image-url.jpg>"
        title="Airbnb Experiences"
        category="Website"
      />

      <Thumbnail
        link="/photoshop"
        image="http://photoshop-image-url.jpg"
        title="Photoshop Redesign"
        category="Desktop App"
      /> */}
    </div>
  )
}

export default Projects;