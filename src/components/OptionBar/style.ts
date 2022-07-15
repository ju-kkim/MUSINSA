import styled from 'styled-components';
import { HeaderHeight } from '../../constant/HeaderHeight';
import { mixins } from '../../styles/mixins';

const FilterList = styled.div`
  ${mixins.flex({ align: 'center' })}
  gap: 5px;
  height: ${HeaderHeight.OptionBar}px;
  padding: 0 7px;
  overflow-x: scroll;
`;

export { FilterList };
