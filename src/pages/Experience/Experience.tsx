import './ExperienceStyle.scss';
import bootstrap from '@assets/images/icons/bootstrap.png';
import dart from '@assets/images/icons/dart.png';
import docker from '@assets/images/icons/docker.png';
import firebase from '@assets/images/icons/firebase.png';
import flutter from '@assets/images/icons/flutter.png';
import git from '@assets/images/icons/git.png';
import jitsi from '@assets/images/icons/jitsi.png';
import laravel from '@assets/images/icons/laravel.png';
import mysql from '@assets/images/icons/mysql.png';
import nest from '@assets/images/icons/nestJS.png';
import nodejs from '@assets/images/icons/nodeJS.png';
import pgsql from '@assets/images/icons/pgsql.png';
import react from '@assets/images/icons/react.png';
import tailwind from '@assets/images/icons/tailwind.png';
import typescript from '@assets/images/icons/typescript.png';
import vscode from '@assets/images/icons/vscode.png';
import CustomTitle from '@shared/CustomTitle/CustomTitle';

const experiences = [
  {
    company: 'JLabs',
    role: 'Full Stack Engineer Intern',
    period: 'December 2024 – July 2025',
    location: 'Philippines, Makati City',
    setup: 'Remote Work',
    description: [
      'As a Full Stack Engineer intern, I was assigned to four major projects using various tech stacks such as React + Laravel, React Native + Laravel, and React + NestJS. My responsibilities included developing and maintaining both front-end and back-end features, integrating APIs, code revisions, and backend revisions.',
      'I collaborated closely with senior developers and designers to build scalable, production-ready features. I also participated in daily Scrum meetings, sprint planning, code reviews, and retrospectives.'
    ],
    stacks: [
      { title: 'React', icon: react },
      { title: 'Laravel', icon: laravel },
      { title: 'PostgreSQL', icon: pgsql },
      { title: 'MySQL', icon: mysql },
      { title: 'Github', icon: git },
      { title: 'VSCode', icon: vscode },
      { title: 'NestJS', icon: nest },
      { title: 'NodeJS', icon: nodejs },
      { title: 'Typescript', icon: typescript },
      { title: 'Bootstrap', icon: bootstrap },
      { title: 'Docker', icon: docker }
    ]
  },
  {
    company: 'National University Fairview',
    role: 'Main Programmer/Developer',
    period: 'August 2021 – August 2025',
    location: 'Philippines, Quezon City',
    description: [
      'I served as one of the main programmers for various group projects and thesis work throughout my academic years. I was responsible for writing and maintaining code, collaborating with my team on system design, and ensuring the functionality of both front-end and back-end features.',
      'The projects I worked on involved web and mobile development using tools and frameworks such as React, Laravel, Flutter, Dart, and Firebase. I also handled basic database management with MySQL and used Git and VSCode as part of my daily workflow.'
    ],
    stacks: [
      { title: 'React', icon: react },
      { title: 'Laravel', icon: laravel },
      { title: 'MySQL', icon: mysql },
      { title: 'React', icon: react },
      { title: 'Tailwind', icon: tailwind },
      { title: 'Flutter', icon: flutter },
      { title: 'Dart', icon: dart },
      { title: 'Firebase', icon: firebase },
      { title: 'Jitsi', icon: jitsi },
      { title: 'Git', icon: git },
      { title: 'VSCode', icon: vscode }
    ]
  }
];

function Experience() {
  return (
    <div className='experience-container'>
      <div className='experience text-center'>
        <div className="title mb-4 position-relative">
          <h5 className='title-header text-center m-0 text-uppercase'>Academic and Experience</h5>
          <CustomTitle>My Journey Over the Years</CustomTitle>
        </div>
      </div>
      <div className='container timeline'>
        {experiences.map((exp, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-left">
              <div>
                <h5 className="company">{exp.company}</h5>
                <p className="period">{exp.period}</p>
                <p className="location">{exp.location}</p>
                <p className="setup">{exp.setup}</p>
              </div>
            </div>
            <div className="timeline-line">
              <span className="dot" />
            </div>
            <div className="timeline-right">
              <div className="timeline-mobile pb-3">
                <div>
                  <h5 className="company">{exp.company}</h5>
                  <p className="period">{exp.period}</p>
                  <p className="location">{exp.location}</p>
                  <p className="setup">{exp.setup}</p>
                </div>
              </div>
              <h6 className="role">{exp.role}</h6>
              {Array.isArray(exp.description)
                ? exp.description.map((para, i) => (
                  <p className="description" key={i}>{para}</p>
                ))
                : <p className="description">{exp.description}</p>}
              <div className="stack-section mb-4">
                <div className="stack-list d-flex align-items-center flex-wrap">
                  {exp.stacks.map((stack) => (
                    <span
                      key={stack.title}
                      className={`tech-item d-flex align-items-center gap-2 tech-${stack.title.toLowerCase().replace('.', '').replace('#', '')}`}
                    >
                      <img src={stack.icon} alt={stack.title} className="icon" />
                      {stack.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
