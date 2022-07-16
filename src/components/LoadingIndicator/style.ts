import styled, { keyframes } from 'styled-components';
import { mixins } from '../../styles/mixins';

const LoadingAnimation = keyframes`
  0% { transform: rotate(0); }
  50% { transform: rotate(180deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingIndicator = styled.div`
  ${mixins.flex({ align: 'center', justify: 'center' })}
  margin: 10px 0 30px;

  svg {
    animation: ${LoadingAnimation} 0.5s infinite linear;
  }
`;

export { LoadingIndicator };
