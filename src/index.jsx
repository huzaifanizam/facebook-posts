import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import profileImg from "./img/Profile black background.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Stack  from 'react-bootstrap/Stack';
import { ArrowRight , HandThumbsUp ,ChatText ,ShareFill} from 'react-bootstrap-icons';


// import {ArrowRight ,Envelops , }

function Hi(props) {
  return (
    <div className="post">
      <div className="postHaed">
        <img src={props.profileImg} width={55} height={55} alt="" />
        <div>
          <h1>{props.name} </h1>
          <div className="date">{props.date} </div>
        </div>
      </div>
      <p>{props.text} </p>
      <div className="postFooter">
        <div className="button">
          <HandThumbsUp />like
        </div>
        <div className="button">
          <ChatText /> Comment
        </div>
        <div className="button">
          <ShareFill /> Share
        </div>
      </div>
      
    </div>

  );
}

ReactDOM.render(
  <Hi
    profileImg={profileImg}
    name="Huzaifa"
    title=" Mr."
    date="3 jan 2021 7:30 pm"
    text="When React renders a component, it passes the component’s props (short for “properties”) as the first argument, as an object. The props object is just a plain JS object, where the keys are prop names and the values are, well, the values of those props."
  />,
  document.querySelector("#root")
);
