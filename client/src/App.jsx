// import React from "react";
// import { Link } from "react-scroll"; // Smooth scrolling
// import AboutMe from "./components/AboutMe";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import "./styles.css";

// function App() {
//   return (
//     <div>
//       {/* Header */}
//       <header className="header">
//         <nav className="navbar">
//           <h1 className="logo">Bhakti's Portfolio</h1>
//           <ul className="nav-list">
//             <li>
//               <Link to="about" smooth={true} duration={500}>
//                 About Me
//               </Link>
//             </li>
//             <li>
//               <Link to="skills" smooth={true} duration={500}>
//                 Skills
//               </Link>
//             </li>
//             <li>
//               <Link to="projects" smooth={true} duration={500}>
//                 Projects
//               </Link>
//             </li>
//             <li>
//               <Link to="contact" smooth={true} duration={500}>
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       {/* Sections */}
//       <main>
//         <section id="about">
//           <AboutMe />
//         </section>
//         <section id="skills">
//           <Skills />
//         </section>
//         <section id="projects">
//           <Projects />
//         </section>
//         <section id="contact">
//           <Contact />
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="footer">
//         <p>&copy; {new Date().getFullYear()} Bhakti's Portfolio</p>
//       </footer>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { Link } from "react-scroll"; // Smooth scrolling
// import AboutMe from "./components/AboutMe";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import "./styles.css";

// function App() {
//   return (
//     <div>
//       {/* Header */}
//       <header>
//         <nav className="navbar">
//           <h1 className="logo">Bhakti's Portfolio</h1>
//           <ul className="nav-links">
//             <li>
//               <Link to="about" smooth={true} duration={500}>
//                 About Me
//               </Link>
//             </li>
//             <li>
//               <Link to="skills" smooth={true} duration={500}>
//                 Skills
//               </Link>
//             </li>
//             <li>
//               <Link to="projects" smooth={true} duration={500}>
//                 Projects
//               </Link>
//             </li>
//             <li>
//               <Link to="contact" smooth={true} duration={500}>
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       {/* Sections */}
//       <main>
//         <section id="about">
//           <AboutMe />
//         </section>
//         <section id="skills">
//           <Skills />
//         </section>
//         <section id="projects">
//           <Projects />
//         </section>
//         <section id="contact">
//           <Contact />
//         </section>
//       </main>

//       {/* Footer */}
//       <footer>
//         <p>&copy; {new Date().getFullYear()} Bhakti's Portfolio</p>
//       </footer>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Link } from "react-scroll"; // Smooth scrolling
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles.css";

function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <nav className="navbar">
          <h1 className="logo">Bhakti's Portfolio</h1>
          <ul className="nav-links">
            <li>
              <Link to="about" smooth={true} duration={500}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Sections */}
      <main>
        <section id="about">
          <AboutMe />
          {/* Adding an image to the AboutMe section */}
          <div className="about-image">
            <img 
              src="/images/1.jpg" 
              alt="Bhakti's Avatar" 
              className="about-img"
            />
          </div>
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Bhakti's Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
