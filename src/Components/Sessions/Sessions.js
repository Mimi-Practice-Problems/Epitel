import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          <h2>LOCATIONS</h2>
          <button class="dropdown-btn" href="#IHC">
            IHC
            <i class="fa fa-caret-down"></i>
          </button>
          <button class="dropdown-btn" href="#Boston">
            Boston
            <i class="fa fa-caret-down"></i>
          </button>
          <button class="dropdown-btn" href="#Johns Hopkins">
            Johns Hopkins
            <i class="fa fa-caret-down"></i>
          </button>
          <button class="dropdown-btn" href="#Mount Sinai">
            Mount Sinai
            <i class="fa fa-caret-down"></i>
          </button>
          <button class="dropdown-btn" href="#Mayo Clinic">
            Mayo Clinic
            <i class="fa fa-caret-down"></i>
          </button>
          <button class="dropdown-btn">
            Dropdown
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-container">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        <h2>Devices by Date</h2>
        </div>
        <div class="header-and-boxes">
          <div class="sessions-header">Sessions</div>
          <div class="session-info">
            <Link to="/sessiondetails">
              <button class="box">box1</button>
              <button class="box">box2</button>
              <button class="box">box3</button>
              <button class="box">box4</button>
              <button class="box">box5</button>
              <button class="box">box6</button>
              <button class="box">box7</button>
              <button class="box">box8</button>
              <button class="box">box9</button>
              <button class="box">box10</button>
              <button class="box">box11</button>
              <button class="box">box12</button>
              <button class="box">box13</button>
              <button class="box">box14</button>
              <button class="box">box15</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Sessions;
