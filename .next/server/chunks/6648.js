"use strict";
exports.id = 6648;
exports.ids = [6648];
exports.modules = {

/***/ 29575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Awards)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./src/data/sections/awards.json
const awards_namespaceObject = JSON.parse('{"TN":"Architecture Awards","WL":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum gravida.","LI":{"p":"/blog","P":"See All"},"BH":{"H":"/img/photo/2.jpg","w":"image"},"ev":[{"title":"Designs of the Year","year":"2022","image":"/img/photo/1.jpg"},{"title":"Firms of the Year","year":"2019","image":"/img/photo/2.jpg"},{"title":"Product Winners","year":"2014","image":"/img/photo/5.jpg"},{"title":"Photography Winners","year":"2008","image":"/img/photo/4.jpg"}]}');
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/gsap/dist/gsap.js
var gsap = __webpack_require__(32913);
;// CONCATENATED MODULE: ./src/app/_common/hoverImages.js

const HoverImages = ()=>{
    // hovers
    let navLinks = gsap.gsap.utils.toArray(".mil-hover-item"), imgWrap = document.querySelector(".mil-img-wrapper"), imgItem = document.querySelector(".mil-img-wrapper img");
    function moveImg(e) {
        let mouseX = e.clientX, mouseY = e.clientY, tl = gsap.gsap.timeline();
    /*
        tl.to(imgWrap, {
            duration: 0.3,
            x: mouseX,
            y: mouseY,
            ease: 'sine',
        })
        */ }
    function linkHover(e) {
        if (e.type === "mouseenter") {
            let imgSrc = e.target.dataset.src;
            let tl = gsap.gsap.timeline();
            tl.set(imgItem, {
                attr: {
                    src: imgSrc
                }
            }).to(imgWrap, {
                autoAlpha: 1,
                scale: 1
            });
        } else if (e.type === "mouseleave") {
            let tl = gsap.gsap.timeline();
            tl.to(imgWrap, {
                autoAlpha: 0,
                scale: 0.3
            });
        }
    }
    function initAnim() {
        navLinks.forEach((link)=>{
            link.addEventListener("mouseenter", linkHover);
            link.addEventListener("mouseleave", linkHover);
            link.addEventListener("mousemove", moveImg);
        });
    }
    function init() {
        initAnim();
    }
    init();
};

;// CONCATENATED MODULE: ./src/app/_components/sections/Awards.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const AwardsSection = ()=>{
    (0,react_.useEffect)(()=>{
        HoverImages();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mil-p-120-90",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mil-background-grid mil-softened"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row justify-content-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mil-mb-90",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "mil-upper mil-up mil-mb-30",
                                            dangerouslySetInnerHTML: {
                                                __html: awards_namespaceObject.TN
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "mil-up mil-mb-30",
                                            dangerouslySetInnerHTML: {
                                                __html: awards_namespaceObject.WL
                                            }
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: awards_namespaceObject.LI.p,
                                            className: "mil-link mil-upper mil-up",
                                            children: [
                                                awards_namespaceObject.LI.P,
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "mil-arrow",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "/img/icons/1.svg",
                                                        alt: "arrow"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-7",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mil-hover-images mil-up",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            children: awards_namespaceObject.ev.map((item, key)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    className: "mil-up",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: "mil-hover-item",
                                                        href: "#.",
                                                        onClick: (e)=>{
                                                            e.preventDefault();
                                                        },
                                                        "data-src": item.image,
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: item.year
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "mil-h4",
                                                                children: item.title
                                                            })
                                                        ]
                                                    })
                                                }, `awards-item-${key}`))
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mil-img-wrapper mil-mb-30",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: awards_namespaceObject.BH.H,
                                                alt: awards_namespaceObject.BH.w
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Awards = (AwardsSection);


/***/ }),

/***/ 22914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_sliderProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19279);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14790);
/* harmony import */ var _data_sliders_partners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81958);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const PartnersSlider = ({ bgStyle  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `mil-${bgStyle}-bg mil-partners mil-relative`,
            children: [
                bgStyle == "soft" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "/img/other/bg.svg",
                    className: "mil-bg-img",
                    alt: "image"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container mil-p-120-120",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mil-background-grid mil-softened"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, {
                            ..._common_sliderProps__WEBPACK_IMPORTED_MODULE_1__/* .SliderProps.milInfiniteSlider */ .M.milInfiniteSlider,
                            className: "swiper-container mil-infinite-show mil-up",
                            children: _data_sliders_partners__WEBPACK_IMPORTED_MODULE_3__/* .items.map */ .e.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                                    className: "swiper-slide",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: item.link,
                                        target: "_blank",
                                        className: "mil-partner-frame",
                                        style: {
                                            "width": "60px"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: item.image,
                                            alt: item.alt
                                        })
                                    })
                                }, `partners-slider-item-${key}`))
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PartnersSlider);


/***/ }),

/***/ 70340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Process)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/app/_common/sliderProps.js
var sliderProps = __webpack_require__(19279);
// EXTERNAL MODULE: ./node_modules/swiper/react/swiper-react.js + 13 modules
var swiper_react = __webpack_require__(14790);
;// CONCATENATED MODULE: ./src/data/sliders/process.json
const process_namespaceObject = JSON.parse('{"TN":"Схема работы","Oc":"Как начать сотрудничество?","QK":[[{"title":"Консультация","text":"Расскажите свою задачу и мы предложим варианты."},{"title":"Генерируем идеи","text":"Обсудим все детали будущего проекта."},{"title":"Планируем перечень работ","text":"Четко просмотрим и согласуем необходимые этапы."}],[{"title":"Заключаем договор","text":"ПРописываем документально все цели и задачи."},{"title":"Получаем оплату","text":"После оплаты приступаем к работе."},{"title":"Выполняем работу","text":"Вы принимаете работу и пользуетесь построенным объектом."}]]}');
;// CONCATENATED MODULE: ./src/app/_components/sliders/Process.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const ProcessSlider = ({ bgStyle ="default" , paddingTop ="120"  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: `mil-${bgStyle}-bg mil-relative`,
            children: [
                bgStyle == "soft" && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/img/other/bg.svg",
                    className: "mil-bg-img",
                    alt: "image"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `container mil-p-${paddingTop}-60`,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row align-items-end",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mil-mb-90",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "mil-suptitle mil-upper mil-up mil-mb-30",
                                                dangerouslySetInnerHTML: {
                                                    __html: process_namespaceObject.Oc
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "mil-upper mil-up",
                                                dangerouslySetInnerHTML: {
                                                    __html: process_namespaceObject.TN
                                                }
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mil-adaptive-right mil-up mil-mb-90",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "mil-nav-buttons",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mil-slider-button mil-process-prev",
                                                    children: "Назад"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mil-slider-button mil-process-next",
                                                    children: "Вперед"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* Swiper */.tq, {
                            ...sliderProps/* SliderProps.milProcessSlider */.M.milProcessSlider,
                            className: "swiper-container mil-process-slider",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "swiper-wrapper",
                                children: process_namespaceObject.QK.map((slide, slide_key)=>/*#__PURE__*/ jsx_runtime_.jsx(swiper_react/* SwiperSlide */.o5, {
                                        className: "swiper-slide",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "swiper-slide",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "row",
                                                children: slide.map((item, key)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "col-lg-4",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "mil-process-box mil-icon-box mil-up mil-mb-60",
                                                            "data-swiper-parallax-duration": "400",
                                                            "data-swiper-parallax": "-900",
                                                            "data-swiper-parallax-scale": ".8",
                                                            "data-swiper-parallax-opacity": "0",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "mil-icon mil-icon-border mil-mb-30",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "/img/icons/11.svg",
                                                                        alt: "icon"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                    className: "mil-upper mil-mb-30",
                                                                    children: item.title
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: item.text
                                                                })
                                                            ]
                                                        })
                                                    }, `process-slider-item-${slide_key}-step-${key}`))
                                            })
                                        })
                                    }, `process-slider-item-${slide_key}`))
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Process = (ProcessSlider);


/***/ }),

/***/ 76711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35985);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\Projects\prog\nextjs\drozdovo_site\ruizarchreact-10\ruizarch\src\app\_components\sections\Awards.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;