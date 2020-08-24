import React, { useEffect } from 'react';
import { TweenMax } from 'gsap';

// https://greensock.com/react/
// https://greensock.com/docs/v3/GSAP/Tween
// https://greensock.com/docs/v3/Eases

interface IProps {
  duration: number;
  settings: { [key: string]: any };
  children: React.ReactElement;
  element: React.RefObject<any>;
}

export const Animation: React.FC<IProps> = ({
  duration, // seconds
  settings,
  element,
  children
}: IProps) => {

  useEffect(() => {
    if (element && element.current) {
      TweenMax.to(element.current, duration, settings);
    }
  });

  return children;
};
