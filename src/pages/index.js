import React from "react"

import { FaFacebook, FaInstagram } from "react-icons/fa"

import avatar from "../images/cormo.svg"

export default () => (
  <div>
    <div className="centered name">
      <span>Luca Cornago</span>
    </div>
    <div className="centered avatar-container">
      <img className="avatar" src={avatar} alt="avatar" />
    </div>

    <div className="centered social-account">
      Follow me on:
      <div className="social-account-item">
        <div>
          <FaFacebook />
        </div>
        <div>Luca Cornago</div>
      </div>
      <div className="social-account-item">
        <div>
          <FaInstagram />
        </div>
        <div>@lucacornago</div>
      </div>
    </div>
  </div>
)
