import React, { useEffect, useRef, useState } from 'react';
import {
  Body,
  ButtonCommon,
  Caption,
  Header,
  Icon,
  SubTitle,
  Text,
  Title,
  WrapperAnimationIn
} from './modalContentStyles';
import { TweenMax } from "gsap";
import { IConfigWithAnswer } from '../../shared/constants';
import { formatExpiryCaption } from '../../shared/utilities';

interface IProps {
  delay?: number;
  config: IConfigWithAnswer;
  onFinish: () => void;
}

export const PageRedeemLaterConfirmation: React.FC<IProps> = ({ delay, onFinish, config }: IProps) => {

  const pageRef = useRef<HTMLDivElement>(null);
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>();

  useEffect(() => {
    if (!isPageLoaded) {
      setIsPageLoaded(true);
      TweenMax.to(pageRef.current || {}, 0.6, { y: 0, autoAlpha: 1, delay });
    }
  }, [isPageLoaded, delay]);

  return (
    <WrapperAnimationIn ref={pageRef} className="page-content" theme={{ transform: '0,-100px,0' }}>
      <Header>
        <img src={config.logo} alt="logo" />
      </Header>
      <Body>
        <Title theme={{ margin: '0 0 3.22px', color: config.theme.primaryColor }}>{config.reward?.reward}</Title>
        <Caption theme={{ margin: '0 0 23.31px' }}>{formatExpiryCaption(undefined)}</Caption>
        <Icon>
          <img src={'https://lucky-general.s3.us-east-2.amazonaws.com/sample/success-icon.png'} alt="icon" />
        </Icon>
        <SubTitle theme={{ margin: '0 0 12.13px' }}>You got it!</SubTitle>
        <Text theme={{ margin: '0 0 26.06px' }}>Mission success!<br />We just sent you the reward.</Text>
        <ButtonCommon theme={{ backgroundColor: config.theme.primaryColor }}
          onClick={onFinish}>Finished</ButtonCommon>
      </Body>
    </WrapperAnimationIn>
  )
};
