import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            typeSpeed: 50,
            backSpeed: 30,
            strings: ["Software Engineer", "Georgia Tech Graduate", "Coding Enthusiast" ],
        });
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/me_graduation.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Ben Pooser</h1>
                    <h3>
                        <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#skills">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>
    )
}
