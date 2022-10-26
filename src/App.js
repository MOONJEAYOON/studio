import React, { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { webUI, floatUI, focusUI } from './res/js/common';

const App = () => {
    useEffect(() => {
        let hasTouchEvent = "ontouchstart" in document.documentElement,
            START_EV = hasTouchEvent ? "touchstart" : "mousedown",
            END_EV = hasTouchEvent ? "touchend" : "mouseup";
        let dragPoint = false;
        webUI.addDelegate(document.body, START_EV, ".usetap", function(e) {
            dragPoint = true;
            this.classList.add("active");
        });
        webUI.addDelegate(document.body, END_EV, ".usetap", function(e) {
            dragPoint = false;
            this.classList.remove("active");
        });
        webUI.addDelegate(document.body, "touchcancel", ".usetap", function(e) {
            dragPoint = false;
            this.classList.remove("active");
        });
        webUI.addDelegate(document.body, "mousemove", ".usetap", function(e) {
            if (dragPoint === true) {
                e.target.onmouseout = function() {
                    this.classList.remove("active");
                }
            }
        });

        floatUI.init();
    }, []);

    return (
        <div id={"wrap"}>
            <Header />
            <Main />
        </div>
    )
}
export default App;