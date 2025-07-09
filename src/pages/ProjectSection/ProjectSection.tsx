import React, { useRef, useState, useEffect } from 'react';
import './ProjectSectionStyle.scss';
import ArrowRight from '@assets/icons/ArrowRight';
import Github from '@assets/icons/Github';
import android from '@assets/images/icons/android.png';
import arduino from '@assets/images/icons/arduino.png';
import dart from '@assets/images/icons/dart.png';
import firebase from '@assets/images/icons/firebase.png';
import flutter from '@assets/images/icons/flutter.png';
import gemini from '@assets/images/icons/gemini.png';
import git from '@assets/images/icons/git.png';
import jitsi from '@assets/images/icons/jitsi.png';
import kotlin from '@assets/images/icons/kotlin.png';
import laravel from '@assets/images/icons/laravel.png';
import mysql from '@assets/images/icons/mysql.png';
import pusher from '@assets/images/icons/pusher.png';
import react from '@assets/images/icons/react.png';
import semaphore from '@assets/images/icons/semaphore.png';
import tailwind from '@assets/images/icons/tailwind.png';
import typescript from '@assets/images/icons/typescript.png';
import vscode from '@assets/images/icons/vscode.png';
import MuzonEcoSave from '@assets/images/projects/MuzonEcoSave.png';
import Pawsitive from '@assets/images/projects/Pawsitive.png';
import SafeHaven from '@assets/images/projects/SafeHaven.png';
import Sibol from '@assets/images/projects/Sibol.png';
import CustomTitle from '@shared/CustomTitle/CustomTitle';

type Project = {
  id: string;
  image: string;
  title: string;
  tagline: string;
  description: string;
  lists: string[];
  stacks: { title: string; icon: string }[];
  color: string;
  gradientColor: string;
};

const projects: Project[] = [
  {
    id: '1',
    image: MuzonEcoSave,
    title: 'MuzonEcoSave',
    tagline: 'Application that turns waste into rewards.',
    description: 'A smart recycling system that encourages eco-friendly behavior by turning waste into rewards. It streamlines the recycling process with a seamless workflow and promotes responsible waste disposal through an easy-to-use, rewarding experience.',
    lists: [
      'An IoT-based system that rewards users with points for recycling plastic bottles.',
      'Utilization of Kotlin for the mobile application and Firebase as the primary database for real-time communication.',
      'A web-based platform with account access, point tracking, and reward redemption features.'
    ],
    stacks: [
      { title: 'React', icon: react },
      { title: 'TypeScript', icon: typescript },
      { title: 'Firebase', icon: firebase },
      { title: 'Android Studio', icon: android },
      { title: 'Kotlin', icon: kotlin },
      { title: 'Arduino', icon: arduino },
      { title: 'VSCode', icon: vscode },
      { title: 'Git', icon: git },
      { title: 'Tailwind', icon: tailwind }
    ],
    color: 'MESColor',
    gradientColor: 'MESColor'
  },
  {
    id: '2',
    image: Sibol,
    title: 'Sibol',
    tagline: 'Turning waste into rewards.',
    description: 'Sibol is a mobile application designed to support sustainable planting through intelligent tools and guidance. It helps users identify plants, choose ideal planting locations, and set up their own urban farms.',
    lists: [
      'A mobile application leveraging AI to recommend optimal planting locations, plant identifications, and urbanfarm setup guidance.',
      'Provides detailed step-by-step guidance for setting up and managing small-scale farming spaces at home, in schools, or in communities.',
      'Delivers personalized plant care recommendations including watering schedules, sunlight needs, and soil conditions tailored to each plant type.'
    ],
    stacks: [
      { title: 'Flutter', icon: flutter },
      { title: 'Dart', icon: dart },
      { title: 'Firebase', icon: firebase },
      { title: 'Gemini', icon: gemini },
      { title: 'VSCode', icon: vscode },
      { title: 'Git', icon: git }
    ],
    color: 'SibolColor',
    gradientColor: 'SibolColor'

  },
  {
    id: '3',
    image: Pawsitive,
    title: 'Pawsitive',
    tagline: 'Simplifying Pet Adoption, One Click at a Time.',
    description: 'A web-based adoption management system that simplifies the process of connecting pets with new homes. It supports virtual meet-and-greets through video calls and delivers real-time updates on application statuses and messages. The platform helps shelters and adopters stay informed and connected throughout the adoption journey.',
    lists: [
      'A web-based platform streamlining the process of adopting pets from shelters and rescue organizations.',
      'Integration of Jitsi for real-time video calls, allowing virtual meet-and-greets with pets.',
      'WebSocket enabling real-time updates and notifications for users regarding their adoption application status and chat messages.'
    ],
    stacks: [
      { title: 'Laravel', icon: laravel },
      { title: 'VSCode', icon: vscode },
      { title: 'MySQL', icon: mysql },
      { title: 'Jitsi', icon: jitsi },
      { title: 'Git', icon: git },
      { title: 'Tailwind', icon: tailwind },
      { title: 'Semaphore', icon: semaphore },
      { title: 'Pusher', icon: pusher }
    ],
    color: 'PawColor',
    gradientColor: 'PawColor'
  },
  {
    id: '4',
    image: SafeHaven,
    title: 'SafeHaven',
    tagline: 'Mental Health Meets Meaningful Connection.',
    description: 'A Voice over IP (VoIP) platform built for mental health support communities. It enables real-time communication, allowing users to join virtual support groups and one-on-one sessions.',
    lists: [
      'A Voice over IP (VoIP) application providing a platform for users to connect and communicate within a mental health support community.',
      'Integration of Jitsi for real-time audio and video calls, facilitating participation in virtual support groups and private sessions.',
      'Offers a safe and inclusive space for users to share experiences, access support resources, and build meaningful connections.'
    ],
    stacks: [
      { title: 'Flutter', icon: flutter },
      { title: 'Dart', icon: dart },
      { title: 'Firebase', icon: firebase },
      { title: 'Jitsi', icon: jitsi },
      { title: 'Git', icon: git },
      { title: 'VSCode', icon: vscode }
    ],
    color: 'SHColor',
    gradientColor: 'SHColor'
  }
];

const ProjectScroll: React.FC = () => {
  const [ activeIndex, setActiveIndex ] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.9 }
    );

    refs.current.forEach(ref => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className='project text-center'>
        <h5 className='title-header m-0 text-uppercase'>Award Winning and Featured Projects</h5>
        <CustomTitle>My Work</CustomTitle>
      </div>
      <div className="container project-page">
        <div className="left-pane">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              data-index={idx}
              ref={(el) => {
                refs.current[idx] = el;
              }}
              className={`project-section ${activeIndex === idx ? 'focused' : 'blurred'} ${proj.gradientColor}`}
            >
              <div className='project-section-img-container'>
                <div className='tagline-container d-flex justify-content-between align-items-center'>
                  <h3 className="project-tagline">{proj.tagline}</h3>
                  <span><ArrowRight /></span>
                </div>
                <div className="project-image-wrapper">
                  <img src={proj.image} alt={proj.title} className="project-image" />
                </div>
              </div>
              <div className='mobile-details-container'>
                <h3 className="title">{proj.title}</h3>
                <p className="description">{proj.description}</p>
                <div className="stack-section">
                  <div className="stack-list d-flex align-items-center flex-wrap">
                    {proj.stacks.map((tech) => (
                      <span
                        key={tech.title}
                        className={`tech-item d-flex align-items-center gap-2 tech-${tech.title.toLowerCase().replace('.', '').replace('#', '')}`}
                      >
                        <img src={tech.icon} alt={tech.title} className="icon" />
                        {tech.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="right-pane">
          <div className={`description-box ${projects[activeIndex]?.color}`}>
            <div className='custom-line-container'>
              <div className="custom-line" aria-hidden="true"></div>
            </div>
            <div>
              <div className='title-container d-flex justify-content-between align-items-center'>
                <h3 className='title m-0'>{projects[activeIndex].title}</h3>
                <div className='github-link d-flex justify-content-center align-items-center gap-1'>
                  <Github />
                </div>
              </div>
              <p className='description'>{projects[activeIndex].description}</p>
              <ul className={`lists-item-box ${projects[activeIndex]?.color}`}>
                {projects[activeIndex].lists.map((point, index) => (
                  <li className='lists-item' key={index}>{point}</li>
                ))}
              </ul>
              <div className="stack-section">
                <div className="stack-list">
                  {projects[activeIndex].stacks.map((tech) => (
                    <span
                      key={tech.title}
                      className={`tech-item d-flex justify-content-center align-items-center gap-2 tech-${tech.title.toLowerCase().replace('.', '').replace('#', '')}`}
                    >
                      <img src={tech.icon} alt={tech.title} className="icon" />
                      {tech.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectScroll;
