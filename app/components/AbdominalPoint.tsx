import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { StaticImageData } from 'next/image';

interface ImageItem {
  id: string;
  src: string | StaticImageData;
  activeSrc:string | StaticImageData;

}

interface AbdominalPointProps {
  default_abs: string | StaticImageData;
  imageItem: ImageItem[];
  width: number;
  height: number;
}

const AbdominalPoint: React.FC<AbdominalPointProps> = ({ default_abs, imageItem, width, height }) => {
  const ref = useRef<SVGSVGElement>(null);
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    const getSrcUrl = (src: string | StaticImageData) => {
      return typeof src === 'string' ? src : src.src;
    };

    svg
      .append('image')
      .attr('xlink:href', getSrcUrl(default_abs))
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', width)
      .attr('height', height)
      .style('cursor','pointer')
      .on('click', (event, d) => {
          console.log('Image clicked:', d,'X..',event.clientX,  event.clientY);
      })
      .lower()

   
    imageItem.forEach(item => {
      svg
        .append('image')
        .attr('xlink:href', getSrcUrl(item.src))
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 600)
        .attr('height', 600)
        .attr('id', item.id)
        .style('cursor', 'pointer')
        .on('click', (event, d) => {
          console.log('Image clicked:', d,event.altitudeAngle, event);
        });
        if (item.activeSrc) {
            svg
              .append('image')
              .attr('xlink:href', getSrcUrl(item.activeSrc))
              .attr('x', 0)
              .attr('y', 0)
              .attr('width', 600)
              .attr('height', 600)
              .attr('id', `${item.id}-active`)
              .style('cursor', 'pointer')
              .style('opacity', 0) // Start hidden

          }
    });

    return () => {
      svg.selectAll('*').remove(); // Cleanup
    };
  }, [default_abs, imageItem, width, height]);

  return (
    <div>
      <svg width={width} height={height} ref={ref} />
      {selectedImageId && (
        <div>
          <p>Selected Image ID: {selectedImageId}</p>
        </div>
      )}
    </div>
  );
};

export default AbdominalPoint;





