import React, {useState, useRef } from 'react';
import Iconofaq from './iconofaq';
import './faq.css';

function Faq(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("faqIcon");

    const content = useRef(null);

    function toggleFaq() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "faqIcon" : "faqIcon rotate"
        );
    }

    return (
        <div className="faqSection">
            <button id={props.colorb} className={`faq ${setActive}`} onClick={toggleFaq}>
                <p className="faqTitle">
                    <Iconofaq className={`${setRotate}`} width={7} fill={props.coloricono}/> 
                    {props.title}
                </p>
            </button>
            <div id={props.color} ref={content} style={{ maxHeight: `${setHeight}`}} className="faqContent">
                <div className="faqText" dangerouslySetInnerHTML={{ __html: props.content}}/>
            </div>
        </div>
    );
}

export default Faq;
