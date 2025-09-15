import './AchievementsStyle.scss';
import { useEffect, useRef, useState } from 'react';
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
    description:
      'Won champion at InnOlympics 2024: GDSC-PLM Hackathon with our project “Sibol,” competing against 30+ schools.'
  },
  {
    title: 'QCEcoSave',
    img: qcecosave,
    description:
      'QCEcoSave earned recognition at DOST-NCR’s Reinventing Cities event among Quezon City schools.'
  },
  {
    title: 'StartupQC',
    img: startupqc,
    description:
      'EcoSave RVM was selected as a top 37 finalist in StartupQC Students Edition 2 by the Quezon City Government.'
  },
  {
    title: 'ICINT',
    img: icint,
    description:
      'Contributed as a team member to the “MuzonEcoSave” project presented at ICINT 2025 in Melbourne, Australia.'
  }
];

function Achievements() {
  const [ offset, setOffset ] = useState(0);
  const [ isPaused, setIsPaused ] = useState(false);
  const [ isDragging, setIsDragging ] = useState(false);
  const startX = useRef(0);
  const startOffset = useRef(0);
  const itemWidth = 450 + 32;
  const speed = 0.7;

  useEffect(() => {
    let frame: number;
    const animate = () => {
      if (!isPaused && !isDragging) {
        setOffset((prev) => prev - speed);
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [ isPaused, isDragging ]);

  useEffect(() => {
    const container = document.querySelector('.infinite-carousel');
    if (!container) return;

    const handleWheel = (e: Event) => {
      const wheelEvent = e as WheelEvent;
      if (wheelEvent.shiftKey) {
        wheelEvent.preventDefault();
        setOffset((prev) => prev - wheelEvent.deltaY);
      }
    };

    container.addEventListener('wheel', handleWheel as EventListener, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel as EventListener);
  }, []);


  const visibleCount = 6;
  const startIndex = Math.floor(Math.abs(offset) / itemWidth) % achievements.length;

  const itemsToRender = Array.from({ length: visibleCount + 2 }, (_, i) => {
    const index = (startIndex + i) % achievements.length;
    return { ...achievements[index], key: `${index}-${i}` };
  });

  const translateX = offset % itemWidth;

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startX.current = e.clientX;
    startOffset.current = offset;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - startX.current;
    setOffset(startOffset.current + dx);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    startX.current = e.touches[0].clientX;
    startOffset.current = offset;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startX.current;
    setOffset(startOffset.current + dx);
  };

  const handleTouchEnd = () => setIsDragging(false);

  return (
    <CustomContainer>
      <div className="achievement-container">
        <div className="achievements text-center">
          <div className="title mb-4 position-relative">
            <h5 className="title-header text-center m-0 text-uppercase">
              My Achievements
            </h5>
            <CustomTitle>Key Achievements</CustomTitle>
          </div>
        </div>

        <div className="p-5">
          <div
            className="infinite-carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              handleMouseUp();
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="carousel-track"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {itemsToRender.map((ach) => (
                <div className="achievement-item" key={ach.key}>
                  <div className="img-container">
                    <img
                      className="w-100"
                      draggable={false}
                      src={ach.img}
                      alt={ach.title}
                    />
                  </div>
                  <div className="py-3">
                    <h5 className="description">{ach.description}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
}

export default Achievements;
