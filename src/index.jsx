import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import profileImg from "./img/Profile black background.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import {
  ArrowRight,
  HandThumbsUp,
  ChatText,
  ShareFill,
} from "react-bootstrap-icons";
import myImage from "./img/d52152ee-fc49-453f-9dae-f3782f555db6.jpg"

// import {ArrowRight ,Envelops , }

function Hi(props) {
  return (
    <div>
      <br />
      <div className="post">
        <div className="postHaed">
          <img src={props.profileImg} width={55} height={55} alt="" />
          <div>
            <h1>{props.name} </h1>
            <div className="date">{props.date} </div>
          </div>
        </div>
        <p>{props.text} </p>

        <img className="postImg" src={props.img} alt="" />
        <br />
        <div className="postFooter">
          <div className="button">
            <HandThumbsUp />
            like
          </div>
          <div className="button">
            <ChatText /> Comment
          </div>
          <div className="button">
            <ShareFill /> Share
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

ReactDOM.render(
  <div>
    <Hi
      profileImg={profileImg}
      name="Huzaifa"
      title=" Mr."
      date="3 jan 2021 7:30 pm"
      img="https://img.freepik.com/premium-photo/green-blue-muscle-car-with-license-plate-number-728_855221-13713.jpg?w=360"
      text="A car is more than mere mechanics; it's a vessel of love and adventure. The hum of its engine, the feel of its wheel, 
      and the journeys it carries us on create a bond that transcends metal and rubber, making it a cherished companion in 
      life's incredible journey."
    />
    <Hi
      profileImg={profileImg}
      name="Muhammad Huzaifa"
      title=" Mr."
      date="3 jan 2021 7:30 pm"
      img="https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg"
      text="The iPhone is not just a device; it's a modern marvel that weaves technology into the fabric of our lives. Its sleek design,
       intuitive interface, and endless capabilities spark an affection that goes beyond mere functionality. With every
        touch, swipe, and click, it becomes a trusted ally, an indispensable tool, and a portal to the world, reminding
         us that love can be found in the palm of our hand."
    />
    <Hi
      profileImg={profileImg}
      name="Huzaifa Nizam"
      title=" Mr."
      date="3 jan 2021 7:30 pm"
      img={myImage}
      text="In the depths of my being, amidst thoughts, emotions, and dreams, love resides. It's an intricate tapestry
       woven from experiences, connections, and self-discovery. Love for oneself, a profound journey of acceptance and 
       growth, is the foundation upon which all other affections are built. It's an ongoing process, a commitment to 
       nurturing one's well-being, and a source of strength in life's intricate dance."
    />
  </div>,
  document.querySelector("#root")
);
