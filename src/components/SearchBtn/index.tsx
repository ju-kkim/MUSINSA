import * as S from './style';
import Icon from '../Icon';

export default function SearchBtn() {
  return (
    <S.SearchBtn type="button">
      <span>검색</span>
      <Icon icon="Search" width="12px" />
    </S.SearchBtn>
  );
}
