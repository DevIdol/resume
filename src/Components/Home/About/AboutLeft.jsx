import React, { Fragment } from "react";
import me from "../../../assets/me.png";
import {
  Facebook,
  Instagram,
  Telegram,
  Twitter,
} from "../../ContactIcon/ContactIcons";
const AboutLeft = () => {
  return (
    <Fragment>
      <div className="col-md-6 text-center">
        <div>
          <img className="me" src={me} alt="" />
          <h4 className="my-name">Ha Shing Thang</h4>
          <h6 className="my-position">Web And Mobile Application Developer</h6>

          <a
            rel="nofollow noopener noreferrer"
            href="https://www.facebook.com/profile.php?id=100026052723303"
            target="_blank"
          >
            <Facebook className="facebook" />
          </a>
          <a
            rel="nofollow noopener noreferrer"
            href="https://www.instagram.com/jostthang/"
            target="_blank"
          >
            <Instagram className="instagram" />
          </a>
          <a
            rel="nofollow noopener noreferrer"
            href="https://twitter.com/johst21"
            target="_blank"
          >
            <Twitter className="twitter" />
          </a>
          <a
            rel="nofollow noopener noreferrer"
            href="https://t.me/devidolmm"
            target="_blank"
          >
            <Telegram className="telegram" />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutLeft;
