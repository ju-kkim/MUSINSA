import * as S from './style';
import Icon from '../Icon';

export default function SearchBar() {
  return (
    <S.SearchBarBg>
      <S.InputBox>
        <Icon icon="Search" width="16px" /> <S.Input type="text" placeholder="상품명 검색" />
      </S.InputBox>
    </S.SearchBarBg>
  );
}
