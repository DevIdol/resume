import React from "react";
import { getPortfolioData } from "../PortfolioData";
import Card from "../../Screens/Card";
import "./AllPortfolio.css";
import five from "../../../assets/project/five.png";
const AllPortfolio = () => {
  const porfoliodata = getPortfolioData();
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
                <a href={data.items.download} className="code">{data.items.code}</a>
                <h6 className="title">{data.items.title}</h6>
                <a href={data.items.download} className="download">{data.items.down}</a>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllPortfolio;
