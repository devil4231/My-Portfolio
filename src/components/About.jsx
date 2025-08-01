import React from 'react';

export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        {/* Left Side - Text */}
        <div className="about-text">
          <h1>ABOUT ME</h1>
          <h1>
            Hi, I’m <span className="accent">Nikhil Kaushik</span>
          </h1>
          <h3>Frontend Developer | MERN Enthusiast | Problem Solver</h3>
          <p>
            I build clean, scalable, and interactive web applications. With a
            strong foundation in <strong>ReactJS</strong>,{' '}
            <strong>JavaScript</strong>, and <strong>QA experience</strong>, I
            craft user-focused solutions while continuously learning and
            improving. Passionate about coding, DSA, and transforming ideas into
            products.
          </p>
          <a href="#projects" className="btn">
            View My Work
          </a>
          <a
            href="https://drive.google.com/file/d/1ppDjPZg73OyD88wdLmvecIIqhj37ZJ3k/view?usp=sharing"
            className="btn"
          >
            My Resume
          </a>
        </div>

        {/* Right Side - Profile Photo */}
        <div className="about-photo">
          <img
            src="/WhatsApp Image 2025-08-01 at 19.02.45.jpeg"
            alt="Nikhil Kaushik"
          />
        </div>
      </div>
    </section>
  );
}
