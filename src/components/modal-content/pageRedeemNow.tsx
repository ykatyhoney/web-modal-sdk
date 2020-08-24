import React, { useEffect, useRef, useState } from 'react';
import { TweenMax } from 'gsap';
import {
  Body,
  ButtonCommon,
  Caption,
  Header,
  SubTitle,
  Title,
  WrapperAnimationIn
} from './modalContentStyles';
import { ContentPage, IConfigWithAnswer } from '../../shared/constants';
import { formatExpiryCaption } from '../../shared/utilities';
import QRCode from 'qrcode.react';

interface IProps {
  config: IConfigWithAnswer;
  bgColor?: string;
  changePageDuration?: number;
  delay?: number;
  setPage: React.Dispatch<React.SetStateAction<ContentPage>>;
  onFinish: () => void;
}

export const PageRedeemNow: React.FC<IProps> = ({
  delay = 0,
  config,
  onFinish
}: IProps) => {

  const pageRef = useRef<HTMLDivElement>(null);

  const [isPageLoaded, setIsPageLoaded] = useState<boolean>();

  useEffect(() => {
    if (!isPageLoaded) {
      setIsPageLoaded(true);
      TweenMax.to(pageRef.current || {}, 0.6, { autoAlpha: 1, delay });
    }
  }, [isPageLoaded, delay]);

  return (
    <>
      <WrapperAnimationIn className="page-content" ref={pageRef}>
        <Header>
          <img src={config.logo} alt="logo" />
        </Header>
        <Body>
          <Title theme={{ margin: '0 0 3.22px', color: config.theme.primaryColor }}>{config.reward.reward}</Title>
          <Caption theme={{ margin: '0 0 16.4px' }}>{formatExpiryCaption(undefined)}</Caption>
          <SubTitle theme={{ margin: '0 0 27.35px' }}>Reward code: {config.reward.rewardCode}</SubTitle>

          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <QRCode value={config.reward.rewardCode} />
          </div>

          <ButtonCommon theme={{ backgroundColor: config.theme.primaryColor }}
            onClick={onFinish}>Finished</ButtonCommon>

        </Body>
      </WrapperAnimationIn>
    </>
  )
};
