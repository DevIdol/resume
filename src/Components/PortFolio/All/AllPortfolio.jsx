import React from "react";
import { getPortfolioData } from "../PortfolioData";
import Card from "../../Screens/Card";
import "./AllPortfolio.css";
import { FaCode } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
const AllPortfolio = () => {
  const porfoliodata = getPortfolioData();
  const code = <FaCode />;
  const down = <MdDownload />;
  return (
    <div className="container">
      <div className="row">
        {porfoliodata.map((data) => {
          return (
            <div key={data.id} className="col-md-4 items">
              <Card className="portfolio-item">
                <img className="img" src={data.items.img} alt="" />
                <div className="language">
                  {data.items.language.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </div>
                <a
                  href={data.items.link}
                  className="code"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {code}
                </a>
                <h6 className="title">{data.items.title}</h6>
                <a href={data.items.download} download className="download">
                  {down}
                </a>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllPortfolio;
