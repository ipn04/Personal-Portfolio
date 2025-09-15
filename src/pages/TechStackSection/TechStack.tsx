import AWS from '@assets/images/icons/aws.png';
import bootstrap from '@assets/images/icons/bootstrap.png';
import expo from '@assets/images/icons/expo.png';
import express from '@assets/images/icons/expressJS.png';
import firebase from '@assets/images/icons/firebase.png';
import git from '@assets/images/icons/git.png';
import javascript from '@assets/images/icons/javascript.png';
import laravel from '@assets/images/icons/laravel.png';
import mongoDB from '@assets/images/icons/mongoDB.png';
import mysql from '@assets/images/icons/mysql.png';
import nest from '@assets/images/icons/nestJS.png';
import nodejs from '@assets/images/icons/nodeJS.png';
import pgsql from '@assets/images/icons/pgsql.png';
import php from '@assets/images/icons/php.png';
import postman from '@assets/images/icons/postman.png';
import react from '@assets/images/icons/react.png';
import tailwind from '@assets/images/icons/tailwind.png';
import typescript from '@assets/images/icons/typescript.png';
import CustomContainer from '@shared/CustomContainer/CustomContainer';
import './TechStackStyle.scss';
import CustomTitle from '@shared/CustomTitle/CustomTitle';

const techStack = [
  { title: 'Github', icon: git },
  { title: 'Javascript', icon: javascript },
  { title: 'PHP', icon: php },
  { title: 'React', icon: react },
  { title: 'Typescript', icon: typescript },
  { title: 'Tailwind CSS', icon: tailwind },
  { title: 'Boostrap', icon: bootstrap },
  { title: 'Laravel', icon: laravel },
  { title: 'NestJS', icon: nest },
  { title: 'PostreSQL', icon: pgsql },
  { title: 'MySQL', icon: mysql },
  { title: 'Firebase', icon: firebase },
  { title: 'Postman', icon: postman },
  { title: 'NodeJS', icon: nodejs },
  { title: 'MongoDB', icon: mongoDB },
  { title: 'ExpressJS', icon: express },
  { title: 'Expo', icon: expo },
  { title: 'AWS', icon: AWS }
];

function TechStack() {
  return (
    <CustomContainer>
      <div className='h-100 d-flex flex-column justify-content-center align-items-center'>
        <div className="title mb-4 position-relative">
          <h5 className='title-header text-center m-0 text-uppercase'>MY SKILLS</h5>
          <CustomTitle>Tech Stack</CustomTitle>
        </div>
        <div className='container skills-container d-flex flex-wrap justify-content-center gap-3'>
          {techStack.map((skill, index) => (
            <div key={index} className='skill-item d-flex align-items-center justify-content-center gap-2 py-1 px-3'>
              <img src={skill.icon} alt={skill.title} className='icon' />
              <span>{skill.title}</span>
            </div>
          ))}

        </div>
      </div>
    </CustomContainer>
  );
}

export default TechStack;
