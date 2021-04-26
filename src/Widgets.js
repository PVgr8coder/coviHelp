import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h3>LinkedIn News</h3>
        <InfoIcon />
      </div>
      {newsArticle("We're Back", "Grind Mode ON!!! - 9899 readers")}
      {newsArticle(
        "CoronaVirus updates",
        "Daily Cases reached 200K+ - 986 readers"
      )}
      {newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
      {newsArticle("Id using Redux good? ", "Code - 123 readers")}
    </div>
  );
}

export default Widgets;
