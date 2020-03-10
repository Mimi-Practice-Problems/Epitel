import React, { Component } from "react";
import "./Sessions.css";

class Sessions extends Component {
  constructor(props) {
    super();
    console.log(props.data);
  }

  render() {
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
    return (
      <div class="main">
        <div class="sidenav">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
          <button class="dropdown-btn">
            Dropdown
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-container">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
          <a href="#contact">Search</a>
        </div>
        <div class="header-and-boxes">
          <div class="sessions-header">Sessions</div>
          <div class="session-info">
            <div class="box">box1</div>
            <div class="box">box2</div>
            <div class="box">box3</div>
            <div class="box">box4</div>
            <div class="box">box5</div>
            <div class="box">box6</div>
            <div class="box">box7</div>
            <div class="box">box8</div>
            <div class="box">box9</div>
            <div class="box">box10</div>
            <div class="box">box11</div>
            <div class="box">box12</div>
            <div class="box">box13</div>
            <div class="box">box14</div>
            <div class="box">box15</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Sessions;
