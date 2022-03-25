import React, { Fragment } from "react";
import me from "../../assets/me.png";
import {
  Facebook,
  Instagram,
  Telegram,
  Twitter,
} from "../ContactIcon/ContactIcons";
const AboutLeft = () => {
  return (
    <Fragment>
      <div className="col-md-6 text-center">
        <div>
          <img className="me" src={me} alt="" />
          <h4 className="my-name">Ha Shing Thang</h4>
          <h6 className="my-position">Web And Mobile Application Developer</h6>

          <a href="">
            <Facebook className="facebook" />
          </a>
          <a href="">
            <Instagram className="instagram" />
          </a>
          <a href="">
            <Twitter className="twitter" />
          </a>
          <a href="">
            <Telegram className="telegram" />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutLeft;
