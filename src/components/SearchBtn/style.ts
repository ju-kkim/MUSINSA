import styled from 'styled-components';
import { COLOR } from '../../styles/color';
import { mixins } from '../../styles/mixins';

const SearchBtn = styled.button<searchStyle>`
  flex-shrink: 0;
  ${mixins.flex({ align: 'center', justify: 'center' })};
  gap: 6px;
  padding: 7px 11px 7px 15px;
  border: 1px solid ${COLOR.GRAY[300]};
  border-radius: 18px;

  ${({ isClick }) =>
    isClick &&
    `
    background: ${COLOR.BLUE};
    border-color: ${COLOR.BLUE};
    color: ${COLOR.WHITE};
    `}
`;

export { SearchBtn };

type searchStyle = {
  isClick: boolean;
};
