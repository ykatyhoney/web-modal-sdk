import React, { useEffect, useRef, useState } from 'react';
import { TweenMax } from 'gsap';
import { AnimationPageChange } from '../shared-components/AnimationPageChange';
import {
  Banner,
  Body,
  ButtonCommon,
  ButtonOutline,
  Caption,
  Header,
  SubTitle,
  Title
} from './modalContentStyles';
import { ContentPage, IConfigWithAnswer } from '../../shared/constants';
import { formatExpiryCaption } from '../../shared/utilities';

interface IProps {
  config: IConfigWithAnswer;
  changePageDuration?: number;
  delay?: number;
  setPage: React.Dispatch<React.SetStateAction<ContentPage>>;
  bgColor?: string;
}

export const PageRewardDisplay: React.FC<IProps> = ({
  bgColor,
  changePageDuration,
  delay = 0,
  setPage,
  config
}: IProps) => {

  const headerRef = useRef<HTMLDivElement>(null);
  const subTitleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [isHeaderLoaded, setIsHeaderLoaded] = useState<boolean>();
  const [isSubTitleLoaded, setIsSubTitleLoaded] = useState<boolean>();
  const [isTitleLoaded, setIsTitleLoaded] = useState<boolean>();
  const [caption, setCaption] = useState<string>();

  const [pageChange, setPageChange] = useState<ContentPage>();


  const CAPTION = formatExpiryCaption(undefined);
  const duration = 0.6;
  const settingsFromSlideIn = { autoAlpha: 0, y: 100 };
  const settingsToSlideIn = { autoAlpha: 1, y: 0 };
  const settingsFromFadeIn = { autoAlpha: 0 };
  const settingsToFadeIn = { autoAlpha: 1 };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    const tweenBottom = bottomRef.current 
      ? TweenMax.fromTo(bottomRef.current, duration, settingsFromSlideIn, { ...settingsToSlideIn, paused: true })
      : null;

    const captionHandler = (): void => {
      let counter = 0;
      const chars = CAPTION.split('');
      const startAnimation = Math.round(chars.length / 2);

      intervalId = setInterval(() => {
        const char = chars[counter];

        if (counter === startAnimation && tweenBottom) {
          tweenBottom.play();
        }

        if (char) {
          setCaption(CAPTION.substring(0, counter));
          counter += 1;
        } else {
          if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
          }
        }
      }, 50);
    };

    if (!isHeaderLoaded && headerRef.current) {
      setIsHeaderLoaded(true);
      TweenMax.fromTo(headerRef.current, duration, settingsFromSlideIn, { ...settingsToSlideIn, delay });
    }

    if (!isSubTitleLoaded && subTitleRef.current) {
      setIsSubTitleLoaded(true);
      TweenMax.fromTo(subTitleRef.current, duration, settingsFromSlideIn, { ...settingsToSlideIn, delay });
    }

    if (!isTitleLoaded && titleRef.current) {
      setIsTitleLoaded(true);
      TweenMax.fromTo(titleRef.current, duration, settingsFromFadeIn, {
        ...settingsToFadeIn,
        delay: delay + duration,
        onComplete: () => captionHandler()
      });
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      if (tweenBottom) {
        tweenBottom.kill();
      }
    };
  }, [
    delay,
    isHeaderLoaded,
    isSubTitleLoaded,
    isTitleLoaded,
    CAPTION,
    duration
  ]);

  return (
    <>
      {pageChange !== undefined && (
        <AnimationPageChange 
          bgColor={bgColor} 
          duration={changePageDuration} 
          callback={() => setPage(pageChange)} 
        />
      )}

      <div className="page-content">
        <Header ref={headerRef}>
          <img src={config.logo} alt="Brand logo" />
        </Header>
        <Body>
          <SubTitle ref={subTitleRef}>Thanks for letting us know!</SubTitle>
          <Title ref={titleRef} theme={{ margin: '0 0 3.22px', color: config.theme.primaryColor }}>{config.reward.reward}</Title>
          <Caption ref={captionRef} theme={{ margin: '0 0 16.4px' }}>{caption}</Caption>
          <div ref={bottomRef}>
            {config.showMap && (
              <Banner theme={{ margin: '0 0 20.37px' }}>
                <img 
                  src="https://lucky-general.s3.us-east-2.amazonaws.com/sample/banner-page-1.png" 
                  alt="Promotional banner" 
                />
              </Banner>
            )}

            {config.allowRedeemNow && (
              <ButtonCommon 
                theme={{ backgroundColor: config.theme.primaryColor }}
                onClick={() => setPageChange(ContentPage.REDEEM_NOW)}
              >
                Redeem it now
              </ButtonCommon>
            )}

            <ButtonOutline 
              variant="outline-secondary" 
              onClick={() => setPageChange(ContentPage.REDEEM_LATER_EMAIL)}
            >
              Email reward
            </ButtonOutline>
            <ButtonOutline 
              variant="outline-secondary" 
              onClick={() => setPageChange(ContentPage.REDEEM_LATER_SMS)}
            >
              Text reward
            </ButtonOutline>
          </div>
        </Body>
      </div>
    </>
  );
};
