import styled from 'styled-components';
import { HeaderHeight } from '../../constant/HeaderHeight';
import { COLOR } from '../../styles/color';
import { mixins } from '../../styles/mixins';

const Header = styled.header`
  ${mixins.position({ position: 'fixed', top: '0', left: '0', right: '0' })}
  border-bottom: ${HeaderHeight.Border}px solid ${COLOR.GRAY[200]};
  background: ${COLOR.WHITE};
  z-index: 100;
`;

const Logo = styled.h1`
  ${mixins.flex({ align: 'center', justify: 'center' })};
  height: ${HeaderHeight.LogoArea}px;
`;

export { Header, Logo };
