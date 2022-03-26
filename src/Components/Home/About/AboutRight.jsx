import React, { Fragment } from "react";
import { MdLocationOn } from "react-icons/md";
import { FaMobileAlt, FaUserGraduate } from "react-icons/fa";
import { Mail } from "../../ContactIcon/ContactIcons";
import AboutInfo from "./AboutInfo";
import CV from '../../../assets/storage/Application.pdf'
import "./AboutRight.css";
const AboutRight = () => {
  return (
    <Fragment>
      <div className="col-md-6 about-right">
        <h4 className="info-title">Personal Infomation</h4>
        <div>
          <AboutInfo
            icon={<MdLocationOn />}
            content="Thazin 2/103 | Kalaymyo"
          />

          <AboutInfo
            icon={<Mail />}
            content="devidol.mm@gmail.com"
            href="mailto:devidol.mm@gmail.com"
            target="__back"
          />
          <AboutInfo
            icon={<FaMobileAlt />}
            content="09891489955"
            href="tel:09891489955"
            target="__back"
          />
          <AboutInfo
            icon={<FaUserGraduate />}
            content=" Final Year (B.C.Sc - kalay)"
            href="http://www.ucskalay.edu.mm"
            target="__back"
          />
        </div>
      <div className="download" >
      <a href={CV} download >Download CV</a>
      </div>
      </div>
    </Fragment>
  );
};

export default AboutRight;
