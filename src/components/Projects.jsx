import React from 'react';

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-content">
        <h1>PROJECTS</h1>
        <div className="portfolio">
          <h3 className="accent">My Portfolio Website</h3>
          <p>
            A modern, responsive portfolio built using ReactJS that showcases my
            skills, experience, and projects. This website is designed with a
            dark theme, smooth scroll navigation, and interactive UI elements to
            create an engaging user experience.
          </p>
          <h4>Features</h4>
          <ul>
            <li>Fully responsive design with smooth animations</li>
            <li>Single-page navigation with scroll-to-section functionality</li>
            <li>Modern UI with dark theme and hover effects</li>
          </ul>
          <h4>Tech Stack Used</h4>
          <ul>
            <li>ReactJS, HTML5, CSS3 (with custom styling & animations)</li>
            <li>Flexbox/Grid for layout</li>
            <li>GitHub Pages for deployment</li>
          </ul>
        </div>
        <div className="GoFood">
          <h3 className="accent">GoFood – MERN Stack Food Ordering App</h3>
          <p>
            GoFood is a full-stack food ordering application built using the
            MERN stack. It allows users to browse a dynamic menu, add items to
            their cart, and place orders seamlessly. The app features secure
            authentication, a user-friendly interface, and a scalable backend to
            handle real-time requests efficiently.
          </p>

          <h4>Features</h4>
          <ul>
            <li>User authentication (Sign up / Login with JWT)</li>
            <li>Browse menu, add to cart, and place orders</li>
            <li>Dynamic categories & items fetched from database</li>
            <li>Admin panel for managing food items</li>
            <li>Responsive design with smooth user experience</li>
          </ul>

          <h4>Tech Stack Used</h4>
          <ul>
            <li>MongoDB – Database</li>
            <li>Express.js – Backend Framework</li>
            <li>ReactJS – Frontend UI</li>
            <li>Node.js – Server-side logic</li>
            <li>JWT – Authentication</li>
          </ul>
          <a
            href="https://drive.google.com/file/d/1n7seFK3N9B_nJo6Wdsv-VUnXAHiEAOe0/view?usp=sharing"
            class="btn"
          >
            Demo Video
          </a>
        </div>
        <div className="IQ-test">
          <h3 className="accent">IQ Test – Web-Based Quiz Application</h3>
          <p>
            The IQ Test website is a simple yet effective quiz application built
            using core web technologies – HTML, CSS, and JavaScript. It allows
            users to attempt a series of questions categorized by difficulty
            (easy, medium, hard) and calculates an IQ score based on their
            performance. This project demonstrates a strong understanding of DOM
            manipulation, event handling, and dynamic content rendering.
          </p>

          <h4>Features</h4>
          <ul>
            <li>
              Interactive quiz with easy, medium, and hard question levels
            </li>
            <li>Dynamic score calculation and result display</li>
            <li>Clean UI with responsive design</li>
            <li>Built without frameworks – purely HTML, CSS, and JavaScript</li>
          </ul>

          <h4>Tech Stack Used</h4>
          <ul>
            <li>HTML5 – Structure</li>
            <li>CSS3 – Styling & Layout</li>
            <li>JavaScript (ES6) – Logic & Interactivity</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
