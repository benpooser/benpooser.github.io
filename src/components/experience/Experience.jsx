import "./experience.scss";
import "../../global.scss"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import timelineElements from "../../timelineElements.js";
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };

    return (
        <div className="experience" id="my_journey">
            <h1>My Journey</h1>
            <VerticalTimeline
                layout="1-column-left"
            >
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
        </div>
    );
}
