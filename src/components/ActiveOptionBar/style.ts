import styled from 'styled-components';
import { COLOR } from '../../styles/color';
import { mixins } from '../../styles/mixins';

const ActiveOptionBar = styled.div`
  ${mixins.flex({ justify: 'space-between' })}
  gap: 5px;
`;

const ActiveOptionList = styled.div`
  ${mixins.flex({ align: 'center' })}
  gap: 5px;
  padding: 0 12px;
  overflow-x: scroll;
`;

const ActiveOption = styled.button`
  flex-shrink: 0;
  ${mixins.flex({ align: 'center', justify: 'center' })}
  padding: 4px 8px;
  border-radius: 4px;
  color: ${COLOR.WHITE};
  background: ${COLOR.BLUE};
`;

const ResetBtn = styled.button`
  flex-shrink: 0;
`;

export { ActiveOptionBar, ActiveOptionList, ActiveOption, ResetBtn };
