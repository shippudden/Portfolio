import toycraftImage from "../assets/ToyCraftThumbnail.png";
import calorieCounterImg from "../assets/Calorie Counter.png";
import iceCreamOrderSystemImg from "../assets/Ice Cream Order System.png";
import bookManagementImg from "../assets/Library Book Management.png";
import hexHarmonyImg from "../assets/HexHarmony.png";
import cssClassesImg from "../assets/CSS Classes.png";
import textToFlowImg from "../assets/TextToFlow.png";
import randomQuotesImg from "../assets/Random Quotes Generator.png";
import resourceImg from "../assets/Resource app.png";
import dashboardImg from "../assets/MotionUI Dashboard.jpg";
import axonUIImg from "../assets/Axon UI.png";
import orbit from "../assets/Orbit.jpg";
// import LoomImg from "../assets/Loom Case Study.jpg";
// import mapQuestImg from "../assets/MapQuest.jpg";
import creativeHubImg from "../assets/Creativehub.png";
// import mrFungiImg from "../assets/Mr. Fungi.png";
import linguaQuest from "../assets/LinguaQuestThumbnail.png";

export const projects = [
    {
      id: "lingua-quest", // changed from "lingua-quest" to match case-studies slug
      title: "Lingua Quest",
      description: "An AI-powered redesign of Duolingo, transforming the learning experience into an epic adventure. Using UXPilot for ideation and Figma for execution, I created a cohesive, gamified mobile app with a unique visual identity and interactive prototype. The design process leveraged AI as a collaborative partner—using UXPilot for rapid concept generation through advanced prompt engineering.",
      image: linguaQuest,
      tags: ["AI-Assisted Design", "Mobile UI/UX", "Duolingo Redesign", "Prompt Engineering", "UX Pilot", "Iterative Design", "Interactive Prototyping", "Figma", "Gamification", "Visual Design"],
      type: "design",
      prototype: "https://www.figma.com/proto/hVgGw4R5jvmVdYTvxgsFdg/LinguaQuest?page-id=0%3A1&node-id=3-3&viewport=140%2C69%2C0.22&t=zDQ4t3Bp7xeVjpBP-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A3"
    },

    {
      id: "orbit",
      title: "Orbit - Pi Economy Plateform",
      description: "A full-stack Pi Network platform that lets users earn Pi through micro-tasks and spend it in a P2P marketplace — creating a circular economy powered by real blockchain payments.",
      image: orbit,
      tags: ["JavaScript", "HTML5", "CSS3", "Full-Stack Development", "BlockchainIntegration", "Pi Network", "P2P Marketplace", "Micro-Tasks", "Web Application", "WebApp", "NodeJS", "ExpressJS", "PiSDK"],
      type: "development",
      demo: "https://orbit-nine-mocha.vercel.app/",
      github: "https://github.com/shippudden/Orbit"
    },

    {
      id: "css-utility-autocomplete",
      title: "CSS Utility Autocomplete",
      description: "A powerful Visual Studio Code extension that provides intelligent autocomplete suggestions for CSS utility classes across multiple languages and frameworks. It currently supports only HTML, but future updates will include support for CSS, Typescript, JavaScript and React.",
      image: cssClassesImg,
      tags: ["JavaScript", "TypeScript"],
      type: "development",
      github: "https://github.com/shippudden/HexHarmony"
    },

    {
      id: "axon-ui",
      title: "Axon UI",
      description: "Axon UI is a front-end UI component library that's robust, customizable, and accessible. It was designed to speed up modern web development. The library brings together a bunch of well-structured, responsive, and reusable components. They were built using the best design principles and coding practices.",
      image: axonUIImg,
      tags: ["React.js", "Modular CSS", 'UI/UX Design', 'Library Managment System', 'Web Application', 'Front-End Development', 'Component Library', 'Design System', 'Figma', 'Collaboration'],
      type: "development",
      github: "https://github.com/shippudden/Axon-UI/tree/feedback-component/axon-ui/src",
      website: "http://axonui.design/"
    },

    {
      id: "toycraft-studio",
      title: "ToyCraft Studio",
      description: "Toycraft Studio is a mobile app concept designed to give users the freedom to customize their toys through a playful and intuitive interface. The app focuses on a single engaging feature—color customization—allowing users to experiment with different color palettes and bring their creative ideas to life.",
      image: toycraftImage,
      tags: ["Mobile Design", "UI/UX", "Prototyping", "Visual Design", "High-Fidelity Design", "Interactive Design", "Playful UI", "Figma", "Toy Customization", "Color Customizaton"],
      type: "design",
      prototype: "https://www.figma.com/proto/mFt9oVZAQG6rWKSpXI4rZX/ToyCraft-Studio?page-id=418%3A5186&node-id=418-5315&viewport=1063%2C279%2C0.28&t=8eTvPKTPzi6Hxbw8-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=418%3A5238"
    },

    {
      id: "calorie-counter",
      title: "Calorie Counter",
      description: "The Fitness calorie younter is a web-based application designed to help users track their calorie expenditure based on their daily physical activities. By inputting the minutes spent on walking, running, and cycling, users can easily calculate the total calories burned.",
      image: calorieCounterImg,
      tags: ["React", "JavaScript", "HTML5", "CSS3"],
      type: "development",
      github: "https://github.com/shippudden/Calorie-Counter",
      demo: "https://shippudden.github.io/Calorie-Counter/"
    },

    {
      id: "dashboard-design",
      title: "MotionUI Dashboard",
      description: "This project is a modern, fully responsive dashboard application developed using React and styled with Tailwind CSS. It features smooth animations and transitions implemented with Framer Motion, making interactions feel dynamic and intuitive. Navigation is powered by React Router, ensuring a seamless user experience.",
      image: dashboardImg,
      tags: ["React", "Dashboard", "Tailwind CSS", "Framer Motion", "React Router", "Responsive Design", "Web Development", "Animation"],
      type: "development",
      github: "https://github.com/shippudden/dashboard-design",
      demo: "https://dashboard-fawn-xi.vercel.app/"
    },

    {
      id: "ice-cream-order-system",
      title: "Ice Cream Order System",
      description: "This is a simple web-based system for managing ice cream orders, designed for an ice cream store in Nigeria. The system allows customers to select from a variety of ice cream flavors, with no fixed limit on how many they can order at once.",
      image: iceCreamOrderSystemImg,
      tags: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
      type: "development",
      github: "https://github.com/shippudden/Ice-Cream-Order-System",
      demo: "https://shippudden.github.io/Ice-Cream-Order-System/"
    },

    {
      id: "library-book-management",
      title: "Library Book Management",
      description: "This project is a Library Book Management system built using HTML, CSS, and JavaScript. It allows users to manage a list of books by adding and deleting books. The list of books will be stored in the browser's local storage.",
      image: bookManagementImg,
      tags: ["JavaScript", "HTML5", "CSS3", "Local Storage", "Particles.js"],
      type: "development",
      github: "https://github.com/shippudden/Library-Book-Management",
      demo: "https://shippudden.github.io/Library-Book-Management/"
    },

    {
      id: "random-quote-generator",
      title: "Random Quote Generator",
      description: "The Random Quote Generator is a simple yet powerful JavaScript project designed to display random quotes to users with each click of a button.",
      image: randomQuotesImg,
      tags: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
      type: "development",
      github: "https://github.com/shippudden/Random-Quote-Generator",
      demo: "https://shippudden.github.io/Random-Quote-Generator/"
    },

    {
      id: "hex-harmony",
      title: "HexHarmony",
      description: "Color Generation via Space Bar or Tap: Users can generate new colors by pressing the space bar (on desktop) or tapping the screen (on mobile). Full-Page Color Change: The entire background changes to the generated color, creating an immersive experience.",
      image: hexHarmonyImg,
      tags: ["JavaScript", "HTML5", "CSS3"],
      type: "development",
      github: "https://github.com/shippudden/HexHarmony",
      demo: "https://shippudden.github.io/HexHarmony/"
    },

    {
      id: "text-to-flow",
      title: "TextToFlow",
      description: "This Figma plugin automatically transforms your written inputs into clear, visually structured user flows, saving you time and ensuring consistency. Perfect for designers looking to streamline ideation and communicate user journeys effortlessly.",
      image: textToFlowImg,
      tags: ["JavaScript", "TypeScript"],
      type: "development",
      github: "https://github.com/shippudden/Userflow-Generator/tree/master/figma-userflow-generator"
    },

    {
      id: "resource-app",
      title: "Resource App",
      description: "Resource Linker is a dynamic web application that empowers users to create and share valuable resources with a link. Users can easily generate resource entries, provide descriptive content, and attach relevant links, fostering a collaborative and informative environment.",
      image: resourceImg,
      tags: ["JavaScript", "HTML5", "CSS3"],
      type: "development",
      github: "https://github.com/shippudden/Resource-App",
      demo: "https://shippudden.github.io/Resource-App/"
    },

    {
      id: "creative-hub",
      title: "Creative Hub",
      description: "CreativeHub is an innovative React-based application designed for managing and organizing tags seamlessly. Built with Tailwind CSS for a sleek, responsive design and Framer Motion for smooth animations, the app allows users to effortlessly add, delete, and interact with tags.",
      image: creativeHubImg,
      tags: ["React", "Tailwind CSS", "Framer Motion", "Tag Management", "Responsive Design", "Animation", "Modern UI", "Dynamic UI", "Frontend Development"],
      type: "development",
      github: "https://github.com/shippudden/Resource-App",
      demo: "https://shippudden.github.io/Resource-App/"
    },
  ];