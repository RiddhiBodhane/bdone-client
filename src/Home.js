import React from "react";
import Common from "./Common";
import home_img from "./images/dummy_img.png"

const Home = () => {
  return(
    <>
      <Common 
        name="Grow your business with" 
        imgsrc={home_img} 
        visit="/service" 
        btname="Get Started" 
      />
    </>
  )
}

export default Home;