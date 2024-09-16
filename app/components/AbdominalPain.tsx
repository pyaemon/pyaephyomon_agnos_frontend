import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import default_abs from '../../public/abs_images/default-abs.png';
import epigastrium_highlight from '../../public/abs_images/epigastrium-highlight.png';
import epigastrium_active from '../../public/abs_images/epigastrium-active.png';
import llq_highlight from '../../public/abs_images/llq-highlight.png';
import llq_active from '../../public/abs_images/llq-active.png';
import luq_highlight from '../../public/abs_images/luq-highlight.png';
import luq_active from '../../public/abs_images/luq-active.png';
import rlq_highlight from '../../public/abs_images/rlq-highlight.png';
import rlq_active from '../../public/abs_images/rlq-active.png';
import ruq_highlight from '../../public/abs_images/ruq-highlight.png';
import ruq_active from '../../public/abs_images/ruq-active.png';
import suprapubic_highlight from '../../public/abs_images/suprapubic-highlight.png';
import suprapubic_active from '../../public/abs_images/suprapubic-active.png';
import umbilicus_highlight from '../../public/abs_images/umbilicus-highlight.png';
import umbilicus_active from '../../public/abs_images/umbilicus-active.png';
import AbdominalPoint from './AbdominalPoint';

interface ImageItem {
  id: string;
  activeSrc: string | StaticImageData;
  highlightImage: string | StaticImageData;
  top: number;
  left: number;
  width: number;
  height: number
}


const Abdominal: React.FC = () => {
  const [selectedAreas,setSelectedAreas]=useState<string[]>([]);

  const onAreaSelected = (id: string) => {
    console.log(id)
    console.log("An area has been selected or deselected!");  
  };

  const images: ImageItem[] = [
    { id: 'epi', highlightImage: epigastrium_highlight , activeSrc: epigastrium_active, top: 10, left: 20, width: 80, height: 80 },
    { id: 'luq', highlightImage: luq_highlight , activeSrc: luq_active , top: 15, left: 25, width: 90, height: 90},
    { id: 'ruq', highlightImage: ruq_highlight , activeSrc: ruq_active , top: 12, left: 12, width: 95, height: 95},
    { id: 'llq', highlightImage: llq_highlight , activeSrc: llq_active , top: 14, left: 15, width: 105, height: 105},
    { id: 'rlq', highlightImage: rlq_highlight , activeSrc: rlq_active , top: 25, left: 30, width: 120, height: 120},
    { id: 'sup', highlightImage: suprapubic_highlight , activeSrc: suprapubic_active , top: 10, left: 15, width: 150, height: 150},
    { id: 'umb', highlightImage: umbilicus_highlight , activeSrc: umbilicus_active , top: 0, left: 0, width: 100, height: 100},
  ];

  return (
    <div className="flex justify-center items-center w-[-220px] border rounded shadow-md bg-white overflow-hidden p-4">
    <div className="relative w-full max-w-[500px] md:max-w-[600px]">
      <Image
        src={default_abs}
        alt="Abdominal Pain Locator"
        layout="responsive"
        width={500}
        height={700}
        className="relative"
      />
      {images.map((area) => (
        <div
          key={area.id}
          className="absolute"
          style={{
            top: `${area.top}%`,
            left: `${area.left}%`,
            width: `${area.width}%`,
            height: `${area.height}%`,
            cursor: "pointer",
          }}
          onClick={() => {
            setSelectedAreas((prev) =>
              prev.includes(area.id)
                ? prev.filter((id) => id !== area.id)
                : [...prev, area.id]
            );
            onAreaSelected(area.id);
          }}
        >
          {selectedAreas.includes(area.id) && (
            <Image
              src={area.highlightImage}
              alt={'label'}
              layout="responsive"
              width={500}
              height={700}
              className="absolute top-0 left-0"
            />
          )}
        </div>
      ))}
    </div>
    </div>
  ); 
};

export default Abdominal;





