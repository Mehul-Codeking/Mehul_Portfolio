import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    reactjs,
    vulkan,
    fastapi,
    nginx,
    postgres,
    mongodb,
    git,
    python,
    pytorch,
    tensorflow,
    tpl,
    nitk,
    dark_pattern,
    uhi,
    cybersmart,
    uav,
    chatbot,
    handgesture,
    threejs,
    embedded,
    graphics,
    quantum,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ML Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud Developer",
      icon: creator,
    },
    {
      title: "Graphics Programmer",
      icon: graphics,
    },
    {
      title: "Micro Controllers",
      icon: embedded,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vulkan",
      icon: vulkan,
    },
    {
      name: "Python FastAPI",
      icon: fastapi,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "PostgreSQL",
      icon: postgres,
    },
    {
      name: "TensorFlow",
      icon: tensorflow,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "NginX",
      icon: nginx,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
  ];
  
  const experiences = [
    {
      title: "Embedded ML Engineer (Intern)",
      company_name: "Tiny Prism Labs ltd.",
      icon: tpl,
      iconBg: "#E6DEDD",
      date: "November 2023 - January 2024",
      points: [
        "Developing and maintaining ML models using Tensorflow, C++ & other related technologies.",
        "Collaborating with cross-functional teams including other developers to create high-quality products.",
        "Implementing the ML Lite model on the ESP32 using Espressif-IDE.",
        "Cross Checking and deployment of the model across other boards to check the performance.",
      ],
    },
    {
      title: "Web Developer (Intern)",
      company_name: "National Institue of Technology, Karnataka",
      icon: nitk,
      iconBg: "#E6DEDD",
      date: "September 2024 - December 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Going to schools and tracking the problem students have in basics of cyber-security.",
        "Implementing responsive design and ensuring cross-browser compatibility as well as the security.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Digital Twin Developer",
      company_name: "AI Quantum Solutions",
      icon: quantum,
      iconBg: "#E6DEDD",
      date: "February 2025 - Present",
      points: [
        "Specialized Product Design & Development of Emerging Technologies.",
        "Analyzing and Building the IoT devices for the monitoring of the campus.",
        "Developing the React Website to control the IoT devices across the campus remotely.",
        "Offering Research and consultancy services based on Artificial Intelligence (AI), Machine Learning (ML) and Deep Learning (DL) Algorithms/Architectures.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Vishwaas",
      description:
        "It is a dark pattern recognizer bowser extension which is able detect the dark patterns at online commerce sites.",
      tags: [
        {
          name: "html css js",
          color: "blue-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "green-text-gradient",
        },
        {
          name: "NLP",
          color: "pink-text-gradient",
        },
      ],
      image: dark_pattern,
      source_code_link: "https://github.com/Mehul-Codeking/Dark_Patterns_CEC_FAB4",
    },
    {
      name: "UAV for thrash detection",
      description:
        "An Unmanned aeriel vehicle which is used to detect the dry waste.",
      tags: [
        {
          name: "raspberry pi",
          color: "blue-text-gradient",
        },
        {
          name: "Mission Planner",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: uav,
      source_code_link: "https://github.com/Anoopsprabhu/UAV-CEC",
    },
    {
      name: "CyberSmart",
      description:
        "A website to survey the awarness of students on cyber security and artificial intelligence.",
      tags: [
        {
          name: "Python FastAPI",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "React JS",
          color: "pink-text-gradient",
        },
      ],
      image: cybersmart,
      source_code_link: "https://cybersmart.nitk.ac.in/",
    },
    {
      name: "Hand Gesture Recognition",
      description:
        "A Machine Learning model which classifys the hand gestures, deployed on ESP32 board.",
      tags: [
        {
          name: "Tensorflow",
          color: "blue-text-gradient",
        },
        {
          name: "ESP 32",
          color: "green-text-gradient",
        },
        {
          name: "C++",
          color: "pink-text-gradient",
        },
      ],
      image: handgesture,
      source_code_link: "https://github.com/Tiny-Prism-Labs/Hand_Gesture_Recog",
    },
    {
      name: "Unified Health Interface",
      description:
        "The Unified Health Interface (UHI) is a network of open protocols that enable the interoperability in health services.",
      tags: [
        {
          name: "Express JS",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: uhi,
      source_code_link: "https://github.com/Mehul-Codeking/UHI_MiniProject/tree/master",
    },
    {
      name: "Virtual Girlfriend",
      description:
        "A virtual girlfriend for the ones who feels lonely, but no worries she take care of your emotions.",
      tags: [
        {
          name: "Streamlit",
          color: "blue-text-gradient",
        },
        {
          name: "Gemini LLM",
          color: "green-text-gradient",
        },
        {
          name: "Three JS",
          color: "pink-text-gradient",
        },
      ],
      image: chatbot,
      source_code_link: "https://github.com/Mehul-Codeking/3D_chatbot",
    },
  ];
  
  export { services, technologies, experiences, projects };