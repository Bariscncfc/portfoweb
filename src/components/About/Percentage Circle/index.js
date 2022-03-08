import React from "react";
import './percentage.scss';
import {Skills1, Skills2} from "../../../assets/data/data";

const PercentageCircle = ({ percentage }) => {
  return (
    <div className="percentage-circle">
        {Skills1.map((skill, index) => {
            return (
                <div className="skill">
                <div className="circle-wrap">
                    <div className="circle">
                        <div className="mask full">
                            <div className="fill"></div>
                        </div>
                        <div className="mask half">
                            <div className="fill"></div>
                        </div>
                        <div className="inside-circle"> {skill.rating}<br/> {skill.title}</div>
                    </div>
                </div>
                </div>
            )
        })}



    </div>
  );
};

export default PercentageCircle;