import './AchievementsStyle.scss';
import { useEffect, useRef } from 'react';
import hackathon from '@assets/images/achievements/hackathon.png';
import icint from '@assets/images/achievements/icint.png';
import qcecosave from '@assets/images/achievements/qcecosave.png';
import startupqc from '@assets/images/achievements/startupqc.png';
import CustomContainer from '@shared/CustomContainer/CustomContainer';
import CustomTitle from '@shared/CustomTitle/CustomTitle';

const achievements = [
  {
    title: 'Hackathon',
    img: hackathon,
    description: 'Won champion at InnOlympics 2024: GDSC-PLM Hackathon with our project “Sibol,” competing against 30+ schools.'
  },
  {
    title: 'QCEcoSave',
    img: qcecosave,
    description: 'QCEcoSave earned recognition at DOST-NCR’s Reinventing Cities event among Quezon City schools.'
  },
  {
    title: 'StartupQC',
    img: startupqc,
    description: 'EcoSave RVM was selected as a top 37 finalist in StartupQC Students Edition 2 by the Quezon City Government.'
  },
  {
    title: 'ICINT',
    img: icint,
    description: 'Contributed as a team member to the “MuzonEcoSave” project presented at ICINT 2025 in Melbourne, Australia.'
  }
];


function Achievements() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let intervalId: NodeJS.Timeout;

    const startScroll = () => {
      intervalId = setInterval(() => {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 1) {
          scrollContainer.scrollLeft = 0;
        }
      }, 25);
    };

    scrollContainer.addEventListener('mouseenter', () => clearInterval(intervalId));
    scrollContainer.addEventListener('mouseleave', startScroll);

    startScroll();

    return () => {
      clearInterval(intervalId);
      scrollContainer.removeEventListener('mouseenter', () => clearInterval(intervalId));
      scrollContainer.removeEventListener('mouseleave', startScroll);
    };
  }, []);

  const duplicatedAchievements = Array(4).fill(achievements).flat();

  return (
    <CustomContainer>
      <div className='achievement-container'>
        <div className='achievements text-center'>
          <div className="title mb-4 position-relative">
            <h5 className='title-header text-center m-0 text-uppercase'>My Achievements</h5>
            <CustomTitle>Key Achievements</CustomTitle>
          </div>
        </div>
        <div className='scrollable-x-container p-5'>
          <div
            className='scrollable justify-content-center align-items-center d-flex overflow-auto flex-row gap-4'
            ref={scrollRef}
          >
            {duplicatedAchievements.map((ach, index) => (
              <div className='achivements-item' key={index}>
                <div className='img-container'>
                  <img className='w-100' draggable={false} src={ach.img} alt={ach.title} />
                </div>
                <div className='py-3'>
                  <h5 className='descrtiption'>{ach.description}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CustomContainer>
  );
}

export default Achievements;
