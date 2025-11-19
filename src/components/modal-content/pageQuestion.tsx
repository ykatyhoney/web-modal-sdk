import React, { useEffect, useRef, useState } from 'react';
// Note: TweenMax is a GSAP 2 API but still works in GSAP 3
// Consider migrating to gsap.to() for future GSAP 4 compatibility
import { TweenMax } from 'gsap';
import {
  Body,
  ButtonOutline,
  Header,
  Title,
  WrapperAnimationIn
} from './modalContentStyles';
import { AnimationPageChange } from '../shared-components/AnimationPageChange';
import { ContentPage, IConfig, ModalAnswer } from '../../shared/constants';

interface IProps {
  config: IConfig;
  bgColor?: string;
  changePageDuration?: number;
  delay?: number;
  setPage: React.Dispatch<React.SetStateAction<ContentPage>>;
  setSelectedAnswer: (answer: ModalAnswer) => void;
}

export const PageQuestion: React.FC<IProps> = ({
  bgColor,
  changePageDuration,
  delay = 0,
  setPage,
  config,
  setSelectedAnswer
}: IProps) => {

  const pageRef = useRef<HTMLDivElement>(null);

  const [pageChange, setPageChange] = useState<ContentPage>();
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>();

  const selectAnswer = (answer: ModalAnswer) => (): void => {
    setSelectedAnswer(answer);
    setPageChange(ContentPage.REWARD_DISPLAY);
  };

  useEffect(() => {
    if (!isPageLoaded && pageRef.current) {
      setIsPageLoaded(true);
      TweenMax.to(pageRef.current, 0.6, { autoAlpha: 1, delay });
    }
  }, [isPageLoaded, delay]);

  const answers = config.answers.map((answerItem, index) => {
    return (
      <ButtonOutline variant="outline-secondary" onClick={selectAnswer(answerItem)} key={index}>{answerItem.answer}</ButtonOutline>
    );
  })

  return (
    <>
      {pageChange !== undefined && (
        <AnimationPageChange 
          bgColor={bgColor} 
          duration={changePageDuration} 
          callback={() => setPage(pageChange)} 
        />
      )}

      <WrapperAnimationIn className="page-content" ref={pageRef}>
        <Header>
          <img src={config.logo} alt="Brand logo" />
        </Header>
        <Body>
          <Title theme={{ margin: '0 0 3.22px', color: config.theme.primaryColor }}>{config.question}</Title>

          {answers}
        </Body>
      </WrapperAnimationIn>
    </>
  )
};
