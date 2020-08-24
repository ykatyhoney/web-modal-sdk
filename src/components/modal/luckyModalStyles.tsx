import styled from 'styled-components';
import { rgba } from 'polished';
import { Button, Modal } from 'react-bootstrap';
import { Colors, ScreenWidth } from '../../shared/constants';

export const ModalStyled = styled(Modal)`
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";

  background-color: ${({ theme }) => rgba(theme.overlayBgColor || Colors.BLANK, theme.overlayBgAlpha || 0.72)}; 
  max-height: 100vh;
  overflow: hidden !important;
  opacity: 1;

  .modal-dialog {
    margin: 15px auto;
    width: calc(100% - 30px);
    max-height: 100vh;
    overflow: hidden;
     
    @media (min-width: ${ScreenWidth.SMALL}) {
      max-width: 48.95833vw;
    }
     
    @media (min-width: ${ScreenWidth.LARGE}) {
      max-width: 800px;
    }

    @media (max-width: 450px) {
      margin: 0;
      height: 100%;
      width: 100%;
    }
  }
  
  .modal-content {
    border: 0;
    border-radius: ${({ theme }) => theme.contentBorderRadius || '10px'};
    background-color: ${({ theme }) => theme.contentBgColor || 'transparent'};
    padding: ${({ theme }) => theme.contentPadding || '40px 20px 30px'};

    max-height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;

    @media (max-width: 450px) {
      padding: 0;
      border-radius: 0;
      height: 100%;
    }
  }
  
  .modal-header, .modal-body, .modal-footer {
    position: relative;
    border: 0;
    padding: 0;
    z-index: 1;
  }
`;

export const CloseBtn = styled(Button)`
  &.btn {
    border: 0;
    border-radius: 0;
    display: block;
    opacity: 0.44;
    height: 20px;
    width: 20px;
    padding: 0;
    position: ${({ theme }) => theme.closeFixed ? 'absolute' : 'absolute'};
    left: ${({ theme }) => theme.closeLeft || '40px'};
    right: ${({ theme }) => theme.closeRight || 'auto'};
    top: ${({ theme }) => theme.closeTop || '80px'};
    bottom: ${({ theme }) => theme.closeBottom || 'auto'};
    z-index: 1052;
    
    &:hover {
      opacity: 1;
    }
    
    svg {
      vertical-align: baseline;
      height: 100%;
      width: 100%;
    }

    @media (max-width: 450px) {
      left: 20px;
      top: 40px;
    }
  }
`;

