import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "./Row.css";
function Row({ info }) {
  return (
    <div className="row">
      <div className="fpo">{info.fpo}</div>
      <div className="contact">
        <img src={info.img} alt="" className="contact__image" />
        <p className="contact__name">{info.contact}</p>
      </div>
      <div className="location">{info.location}</div>
      <div className="members">{info.members}</div>
      <div className="bod">{info.bod}</div>
      <div className="staffs">{info.staffs}</div>
      <div className="action">
        <VisibilityIcon className="icon1" />
        <EditIcon />
      </div>
    </div>
  );
}

export default Row;
