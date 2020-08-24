import styled from 'styled-components';
import { darken } from 'polished';
import { Button } from 'react-bootstrap';

export const Content = styled.div`
  border-radius: 30px;
  padding: 43px 22px 30px 23px;
  margin: 0 auto;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transform: scale(0);
  position: relative;

  background-image: url(https://svgshare.com/i/NyH.svg);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: contain;
  
  @media (min-width: 768px) {
    padding: 46.84px 23px 32.38px 25px;
  }
  
  @media (max-width: 450px) {
    border-radius: 0;
    height: 100%;
  }

  .page-content {
    position: relative;
    z-index: 1;
  }
  
  .page-content-fade {
    opacity: 0;
    visibility: hidden;
  }
`;

export const WrapperAnimationIn = styled.div`
  transform: translate3d(${({ theme }) => theme.transform || '0,0,0'});
  opacity: 0;
  visibility: hidden;
`;

export const Header = styled.div`
  margin-bottom: 30px;
  margin-top: 96px;
  display: flex;
  align-items: center;

  img {
    display: block;
    margin: 0 auto;
    max-width: 30%;
    width: 100%;
  }
`;

export const Body = styled.div`

`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize || '26.14px'};
  font-weight: 700;
  color: ${({ theme }) => theme.color || '#000'};
  letter-spacing: -0.33px;
  text-align: center;
  margin: 0 auto 15px auto;
  max-width: 400px;
  
  .dark & {
    color: ${({ theme }) => theme.darkColor || '#fff'};
  }
`;

export const SubTitle = styled.h3`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize || '21.79px'};
  color: ${({ theme }) => theme.color || '#000'};
  letter-spacing: 0;
  text-align: center;
  margin: ${({ theme }) => theme.margin || ''};

  .dark & {
    color: ${({ theme }) => theme.darkColor || '#fff'};
  }
`;

export const Caption = styled.p`
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSize || '14.16px'};
  color: ${({ theme }) => theme.color || '#A9A9A9'};
  letter-spacing: 0;
  text-align: center;
  margin: ${({ theme }) => theme.margin || ''};

  .dark & {
    color: ${({ theme }) => theme.darkColor || '#fff'};
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize || '21.79px'};
  color: ${({ theme }) => theme.color || '#000'};
  letter-spacing: 0;
  text-align: center;
  margin: ${({ theme }) => theme.margin || ''};

  .dark & {
    color: ${({ theme }) => theme.darkColor || '#fff'};
  }
`;

export const Icon = styled.div`
  margin: 0 auto 5.63px;
  width: 59px;
  
  img {
    max-width: 100%;
  }
`;

export const Banner = styled.div`

  margin: ${({ theme }) => theme.margin || '0 auto 20.37px'};
  
  img {
    display: block;
    margin: 0 auto;
    max-width: 327px;
    width: 100%;
  }
`;

export const ButtonCommon = styled(Button)`
  &.btn {
    border: 0;
    border-radius: 47.05px;
    display: block;
    background-color: ${({ theme }) => theme.backgroundColor || '#00704A'};
    margin: ${({ theme }) => theme.margin || '0 auto 23.34px'};
    padding: 10px;
    min-height: 54px;
    max-width: 315.91px;
    width: 100%;
    font-weight: 600;
    font-size: 19.61px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    
    &:hover {
      background-color: '${({ theme }) => darken(0.15, theme.backgroundColor || '#00704A')}';
    }
  }
`;

export const ButtonOutline = styled(Button)`
  &.btn {
    border: 2px solid #959595;
    border-radius: 47.05px;
    display: block;
    padding: 10px;
    min-height: 54px;
    max-width: 315.91px;
    width: 100%;
    margin: ${({ theme }) => theme.margin || '0 auto 21px'};
    font-weight: 600;
    font-size: 17.43px;
    color: ${({ theme }) => theme.color || '#000'};
    letter-spacing: 0;
    text-align: center;

    .dark & {
      color: ${({ theme }) => theme.darkColor || '#fff'};
    }
    
    &:hover {
      background-color: #fff;
      color: #906BFF;
    }
  }
`;

export const ButtonLink = styled(Button)`
  &.btn {
    display: block;
    padding: 0;
    margin: ${({ theme }) => theme.margin || '0 auto'};
    font-weight: 600;
    font-size: 17.43px;
    color: #959595;
    letter-spacing: 0;
    text-align: center;
  }
`;

export const InputStyled = styled.input`
  border: 2px solid #959595;
  border-radius: 47.05px;
  display: block;
  margin: ${({ theme }) => theme.margin || '0 auto 20px'};
  line-height: 54px;
  padding: 0 21.5px;
  max-width: 315.91px;
  width: 100%;
`;

export const BottomLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgb(149, 149, 149);
  margin-top: 10px;

  .dark & {
    color: ${({ theme }) => theme.darkColor || '#fff'};
  }
  
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  img {
    width: 90px;
    margin-top: 0.6rem;
  }
`;
