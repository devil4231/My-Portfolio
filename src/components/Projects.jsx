import React from 'react';

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-content">
        <h1>PROJECTS</h1>
        <div className="prypco">
          <h2 className="accent">PRYPCO BLOCKS</h2>
          <h3>Jan 2026 - Present</h3>
          <p>
            Prypco is a technology-driven company focused on building modern digital solutions with an emphasis on scalability, performance, and user experience. The organization works on developing and maintaining software products that leverage contemporary technologies, agile practices, and data-driven decision-making to solve real-world business problems.

            Prypco promotes a collaborative engineering culture where product, development, and quality teams work closely to deliver reliable and high-quality software solutions.
          </p>

          <h4>Features</h4>
          <ul>
            <li>
              Perfomred Manual Testing of Complex Modules
            </li>
            <li>Perfomred Regression testing for Major Chanegs</li>
            <li>Wrote end to end test cases and maintain test sheets for the features</li>
            <li>Focussed on Bug free build delivery</li>
          </ul>

          <h4>Tech Stack Used</h4>
          <ul>
            <li>JIRA</li>
            <li>Test Case Management</li>
            <li>Playwright</li>
            <li>Postman</li>
          </ul>
        </div>
        <div className="foxmatrix">
          <h2 className="accent">FOXMATRIX - AI Interviewer</h2>
          <h3>Sep 2025-Dec 2025</h3>
          <p>
            Foxmatrix is an AI based Interviewer where Candidate is conducted an AI based Interview
            based on their experience and Skills. AI asks relevant questions according to the skills and
            experience of the candidate. Then the Candidate is evaluated based on their responses by AI and
            AI gives a score out of 10 based on the knowledge of the candidate.
          </p>

          <h4>Features</h4>
          <ul>
            <li>
              AI ask question according to the candidate profile
            </li>
            <li>Candidate evaluation is done by the AI</li>
            <li>Human based Interviews can also be conducted</li>
            <li>Utilises the functionality of websockets to ensure real time Conversations</li>
          </ul>

          <h4>Tech Stack Used</h4>
          <ul>
            <li>JIRA</li>
            <li>Zephyr</li>
            <li>Locust(Load Testing)</li>
            <li>Selenium (Automation) </li>
          </ul>
        </div>
        <div className="portfolio">
          <h2 className="accent">My Portfolio Website</h2>
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
          <h2 className="accent">GoFood – MERN Stack Food Ordering App</h2>
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
      </div>
    </section>
  );
}
