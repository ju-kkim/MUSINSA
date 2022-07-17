import * as S from './style';
import Icon from '../Icon';
import { MouseEventHandler } from 'react';

export default function SearchBtn({
  onClick,
  isClick,
}: {
  onClick: MouseEventHandler;
  isClick: boolean;
}) {
  return (
    <S.SearchBtn type="button" onClick={onClick} isClick={isClick}>
      <span>검색</span>
      <Icon icon="Search" width="12px" />
    </S.SearchBtn>
  );
}
