const webUI = (function() {
    let timeout;
    return {
        getChildIndex: function(child) {
            let parent = child.parentNode;
            let children = parent.children;
            let i = children.length - 1;
            for (; i >= 0; i--) {
                if (child == children[i]) {
                    break;
                }
            }
            return i;
        },
        debounce: function(func, wait, immediate) {
            let context = this,
                args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            }, wait);
            if (immediate && !timeout) func.apply(context, args);
        },
        easeInOutQuad: function(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        },
        animatedScrollTo: function(element, to, duration) {
            let start = element.scrollLeft;
            let change = to - start;
            let currentTime = 0;
            let increment = 20;
            let animateScroll = function(callback) {
                currentTime += increment;
                let val = Math.floor(
                    webUI.easeInOutQuad(currentTime, start, change, duration)
                );
                element.scrollLeft = val;
                if (currentTime < duration) {
                    window.requestAnimationFrame(animateScroll);
                } else {
                    if (callback && typeof callback === "function") {
                        callback();
                    }
                }
            };
            animateScroll();
        },
        addListener: function(node, event, listener, useCapture) {
            if (!node || !event || !listener) return;

            if (node instanceof Node) {
                node.addEventListener(
                    event,
                    listener,
                    typeof useCapture === "undefined" ? false : useCapture
                );
            } else if (node instanceof NodeList) {
                if (node.length > 0) {
                    for (let i = 0, l = node.length; i < l; i++) {
                        node[i].addEventListener(
                            event,
                            listener,
                            typeof useCapture === "undefined" ? false : useCapture
                        );
                    }
                }
            }
        },
        addDelegate: function(node, event, selector, listener, useCapture) {
            if (!node || !event || !listener) return;

            webUI.addListener(
                node,
                event,
                function(e) {
                    let target = e.target;
                    if (typeof selector === "string") {
                        while (target.matches(selector) == false && target !== this) {
                            target = target.parentElement;
                        }
                        if (target.matches(selector)) {
                            listener.call(target, e);
                        }
                    } else {
                        selector.call(this, e);
                    }
                },
                useCapture
            );
        },
    };
})();
let navUi = (function () {
    return {
        initMainNav: function (node) {
            webUI.addDelegate(node, "click", ".tab_link", function (e) {
                e.preventDefault();
                if (!this.classList.contains("current")) {
                    let indexNum = webUI.getChildIndex(this);
                    node.querySelector(".active").classList.remove("current");
                    this.classList.add("current");
                    webUI.animatedScrollTo(
                        node,
                        node.querySelectorAll("li")[indexNum].offsetLeft +
                        node.querySelectorAll("li")[indexNum].clientWidth * 0.5 -
                        node.clientWidth * 0.5,
                        300
                    );
                }
            });
        }
    };
})();



/* 레이어 팝업 */
const layerPopup = (function() {
    let html = undefined;
    let layer;
    let sctop;
    return {
        show: function(elem, container) {
            layer = document.querySelector(elem);
            if (container == null) {
                html =
                    document.body.scrollTop == "0" ?
                        document.documentElement :
                        document.body;
            } else {
                html = container;
            }
            sctop = html.scrollTop;
            html.style.top = 0 - sctop + "px";
            html.classList.add("noscroll");
            if (layer !== null) {
                layer.style.display = "block";
                document.body.setAttribute("data-popup", "true");
                setTimeout(function() {
                    layer.classList.add("visible");
                }, 50);
            }
        },
        hide: function(elem, effect = "") {
            if (html == undefined) {
                html =
                    document.body.scrollTop == "0" ?
                        document.documentElement :
                        document.body;
            }
            if (elem !== undefined) {
                layer = document.querySelector(elem);
            }
            html.classList.remove("noscroll");
            html.scrollTop = sctop;
            html.style.top = "";
            if (layer !== null) {
                setTimeout(() => {
                    document.body.setAttribute("data-popup", "false");
                }, 500);
                layer.classList.remove("visible");
                if (effect == "fast") {
                    layer.style.display = "none";
                } else {
                    setTimeout(function() {
                        if (layer !== null) {
                            layer.style.display = "none";
                        }
                    }, 500);
                }
            }
        },
    };
})();

export {webUI, navUi, layerPopup}