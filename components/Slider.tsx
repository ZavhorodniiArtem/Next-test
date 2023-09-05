"use client"

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import 'swiper/css';
import styles from "../styles/slider.module.scss"
import NextjJs from "../assets/img/nextjs.jpg"
import Ice from "../assets/img/ice.jpg"
import Js from "../assets/img/js.jpg"
import ReactIcon from "../assets/img/react.png"
import ReduxJs from "../assets/img/Redux.jpg"
import Css from "../assets/img/css3.jpg"
import Html from "../assets/img/html5.jpg"
import Image from "next/image";

const one = [
    {
        name: "React",
        description: "React is a popular JavaScript library for building user interfaces. It was developed by Facebook and has gained widespread adoption in the web development community. React is often used to create single-page applications (SPAs) and mobile applications.",
        image: ReactIcon,
        btnText: "React"
    },
    {
        name: "Next js",
        description: "Next.js is a framework for building server-rendered React applications. It is built on top of React and provides additional features and conventions to simplify the development process. Next.js is often used for building dynamic and high-performance web applications.",
        image: NextjJs,
        btnText: "Next"
    },
    {
        name: "Javascript",
        description: "JS, or JavaScript, is a popular programming language used for web development. It is primarily used to add interactivity and dynamic features to websites. JavaScript allows developers to create functions, manipulate HTML elements, handle events, and interact with web APIs.",
        image: Js,
        btnText: "Js"
    },
    {
        name: "OOP",
        description: "OOP, or Object-Oriented Programming, is a programming paradigm that organizes software design around objects that represent real-world entities or concepts. In OOP, objects are instances of classes, which define the properties (attributes) and behaviors (methods) that objects possess.",
        image: Ice,
        btnText: "OOP"
    },
    {
        name: "Redux",
        description: "Redux is a predictable state container for JavaScript applications. It is often used in conjunction with React, but it can be used with any JavaScript framework or library. Redux helps manage the state of an application in a predictable and centralized manner, making it easier to understand and debug the application's data flow.",
        image: ReduxJs,
        btnText: "Redux"
    },
    {
        name: "CSS",
        description: "CSS, short for Cascading Style Sheets, is a style sheet language used to describe the visual presentation of a document written in HTML or XML. It provides a set of rules and properties that define how elements should be displayed on a web page.",
        image: Css,
        btnText: "CSS"
    },
    {
        name: "HTML",
        description: "HTML, or Hypertext Markup Language, is the standard markup language for creating web pages and web applications. It defines the structure and content of a web page, including text, images, links, and other elements.",
        image: Html,
        btnText: "HTML"
    }
]

const SliderBlock = () => {
    return (
        <div className={styles.sliderWrapper}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    700: {
                        slidesPerView: 1,
                    }
                }}
            >
                {
                    one.map((item) => {
                        return (
                            <SwiperSlide key={item.name} className={styles.swiperSlide}>
                                <Image src={item.image} alt="" height={250}/>
                                <div>
                                    <h1>{item.name}</h1>
                                    <h2>{item.description}</h2>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export {SliderBlock}