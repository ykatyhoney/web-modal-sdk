import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { TweenMax } from 'gsap';

// https://greensock.com/react/

const PageChange = styled.div`
  background-color: ${({ theme }) => theme.bgColor || 'transparent'};
  box-shadow: 0 0 10px 3px ${({ theme }) => theme.bgColor || 'transparent'};
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  height: 0;
  width: 0;
  z-index: 10;
  transform: translate3d(-50%,-50%,0);
`;

interface IProps {
  bgColor?: string;
  duration?: number;
  callback?: () => void;
}

export const AnimationPageChange: React.FC<IProps> = ({
  bgColor,
  duration = 0.3, // seconds
  callback = () => { },
}: IProps) => {

  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    TweenMax.to(
      elRef.current || {},
      duration,
      {
        height: '200vw',
        width: '200vw',
        onComplete: callback
      }
    );
  });

  return <PageChange ref={elRef} theme={{ bgColor }} />;
};
