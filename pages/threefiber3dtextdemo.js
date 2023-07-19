
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { extend, Canvas } from "react-three-fiber";
import DatGui, { DatColor, DatNumber, DatSelect } from "react-dat-gui";
import { Text } from "troika-three-text";
import fonts from "../public/fonts/fonts";

/**
 * TODO implement the 3D text on this page
 * https://codesandbox.io/s/troika-3d-text-via-react-three-fiber-forked-z29twz?file=/src/index.js:734-1197
 */

// Register Text as a react-three-fiber element
extend({ Text });

const text = "This 3D text animation is all rendered and animated with Javascript modules, the techniqueProfile-Finder will be a React.js and NextJS based social WebApp. The real idea behind this project is still sercret, but as long as I can keep my project and source public, I am always willing to share what I am working on. I started getting into React.js and other JS frameworks and libraries since 27 June 2023. So I am a really new React developer, I'm more an autodidact home junior Javascript development student. Still have to learn a lot and I am still orienting around in these JS frameworks (and lib's) to see what I want to work with in the future most. I just got interested in Three.js, to see if I could maybe develop a great animation when you access the homepage and really create a WOW effect when you land to this Webapp. Webapp deployment link: https://profile-finder-black.vercel.app (You can login with Google, Facebook and Github or register on the /aanmelden page. You will not get an email, to confirm, fill in a fake mailadres when you register and you can login right away.) Github repository of this project: https://github.com/ThomPoppins/Profile-Finder  Github profile: https://github.com/ThomPoppins If you'd like to collaborate with me on this project, please let me know, get involved and I'll share the business plan I have in mind to make some money with this project. I could really use someone who likes to do webdesign, I am a strong functional and technical developer, (with a 3,5 year working career history as medior backend PHP developer in e-commerce) but I have 0 design experience and it's not really my cup of tea either. So,frontend designers, also junior designers, you're welcome to get involved with my project! Contact me at thompoppins@gmail.com";


export default function ThreeFiber3DTextDemo() {

  return (
    <div>
      <p></p>
    </div>
  )
}

