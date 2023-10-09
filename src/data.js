export const projects = [
  {
    title: "Reversi Web Application",
    subtitle: "Node.JS and mySQL",
    description:
      "Designed a Node.js web application similar to Chess.com, but for the game Reversi. Ran the game logic through an MVC structure using ES6 with socket.io to host online play. Wrote AI minimax algorithm at three different difficulties to be opponent. Created SQL database to handle player accounts and statistics",
    image: "./projects/reversi/reversi.gif",
  },
  {
    title: "HealthIO Device",
    subtitle: "C and JavaScript",
    description:
      "Air quality sensing device from New Age Micro, LLC. Programmed multiple webpages using HTML, JS, and JQuery and sent data between it and the device. Debugged data transfers, data leaks, overlarge byte sizes, and incorrect sensor calibrations. See at https://www.newagemicro.com/",
    image: "./projects/healthio/healthio.gif",
  },
  {
    title: "JavaScript Automated Testing",
    subtitle: "Jest and Puppeteer",
    description:
      "Wrote JS tests for ISS encryption and device management service. Used Puppeteer library to navigate and web scrape the portal. Learned Jira and the Jest framework to generate reports and send results to the client. Completed automated tests of varying difficulty, including parsing encryption keys through scripted files",
    image: "./projects/iss/iss.gif",
  },
  {
    title: "C++ Maze Generation and AI",
    subtitle: "Embedded C++",
    description:
      "Coded a reinforcement learning algorithm using C++ to solve a user-generated maze. The maze is created by a user manipulating a cursor from a keypad attached to a De1-SoC board. The code ran through the board using a linux terminal and output the graphics through VGA. Analyzed efficiency results",
    image: "./projects/de1soc/de1soc.gif",
  },
];

export const skills = [
  { skillName: "JavaScript",
    image: "./skillicons/jslogo.png"},
  { skillName: "Node.JS",
    image: "./skillicons/nodelogo.jpg"},
  { skillName: "React.JS",
    image: "./skillicons/reactlogo.png"},
  { skillName: "JQuery",
    image: "./skillicons/jquerylogo.png"},
  { skillName: "HTML",
    image: "./skillicons/HTML5logo.png"},
  { skillName: "CSS",
    image: "./skillicons/CSSlogo.png"},
  { skillName: "Tailwind CSS",
    image: "./skillicons/tailwindlogo.png"},
  { skillName: "C",
    image: "./skillicons/clogo.png"},
  { skillName: "C++",
    image: "./skillicons/cpplogo.png"},
  { skillName: "Java",
    image: "./skillicons/javalogo.jpg"},
  { skillName: "SQL",
    image: "./skillicons/sqllogo.png"},
  { skillName: "Photoshop",
    image: "./skillicons/dockerlogo.png"},
];
