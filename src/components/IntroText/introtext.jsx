import React from "react";
import "./introtext.css";
import ProfileLinks from "../ProfileLinks/profilelinks";
import { ReactComponent as DownArrow } from "../../assets/svgs/down-arrow.svg";

setTimeout(() => {
  var words = document.getElementsByClassName("word");
  var wordArray = [];
  var currentWord = 0;

  words[currentWord].style.opacity = 1;
  for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
  }

  function changeWord() {
    if (words.length == 0) return;
    var cw = wordArray[currentWord];
    var nw =
      currentWord == words.length - 1
        ? wordArray[0]
        : wordArray[currentWord + 1];
    for (var i = 0; i < cw.length; i++) {
      animateLetterOut(cw, i);
    }

    for (var i = 0; i < nw.length; i++) {
      nw[i].className = "letter behind";
      nw[0].parentElement.style.opacity = 1;
      animateLetterIn(nw, i);
    }

    currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
  }

  function animateLetterOut(cw, i) {
    setTimeout(function () {
      cw[i].className = "letter out";
    }, i * 80);
  }

  function animateLetterIn(nw, i) {
    setTimeout(function () {
      nw[i].className = "letter in";
    }, 340 + i * 80);
  }

  function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = "";
    var letters = [];
    for (var i = 0; i < content.length; i++) {
      var letter = document.createElement("span");
      letter.className = "letter";
      letter.innerHTML = content.charAt(i);
      if (letter.innerHTML == " ") letter.innerHTML = "&nbsp;";
      word.appendChild(letter);
      letters.push(letter);
    }

    wordArray.push(letters);
  }

  changeWord();
  setInterval(changeWord, 4000);
}, 1000);
const IntroText = ({ scrollToWork }) => {
  return (
    <div className="textDiv">
      <p className="rotateTextP">Hi, I am a </p>
      <div id="rotatingSpans" className="rotateTextP">
        <span className="word">Full Stack Developer</span>
        <span className="word">Front End Developer</span>
        <span className="word">Back End Developer</span>
      </div>
      <div style={{ marginTop: "70px" }}>
        <ProfileLinks />
      </div>
      <div style={{ marginTop: "15px" }}>
        <div onClick={scrollToWork} className="viewWorkButton buttonHover">
          <DownArrow className="viewWorkIcon" />
          View My Work
        </div>
      </div>
    </div>
  );
};

export default IntroText;
