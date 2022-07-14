import styled from 'styled-components';
import { COLOR } from '../../styles/color';
import { mixins } from '../../styles/mixins';

const Filter = styled.button`
  flex-shrink: 0;
  ${mixins.flex({ align: 'center', justify: 'center' })};
  gap: 3px;
  padding: 7px 15px;
  border: 1px solid ${COLOR.GRAY[300]};
  border-radius: 18px;
`;

export { Filter };
