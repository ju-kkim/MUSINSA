import styled from 'styled-components';
import { COLOR } from '../../styles/color';
import { FONT } from '../../styles/font';
import { mixins } from '../../styles/mixins';

const SearchBarBg = styled.div`
  padding: 20px 15px;
  background: ${COLOR.GRAY[100]};
`;

const InputBox = styled.div`
  ${mixins.flex({})}
  gap: 7px;
  height: 40px;
  padding: 0 13px;
  border: 1px solid ${COLOR.GRAY[400]};
  background: ${COLOR.WHITE};
`;

const Input = styled.input`
  width: 100%;
  font-size: ${FONT.SIZE.MEDIUM};
`;

export { SearchBarBg, InputBox, Input };
