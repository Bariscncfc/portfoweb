import React from "react";
import './percentage.scss';
import {Skills} from "../../../assets/data/skills";

const PercentageCircle = ({ percentage }) => {
  return (
    <div className="percentage-circle">
        {Skills.map((skill, index) => {
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