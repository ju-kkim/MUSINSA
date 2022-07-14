import * as S from './style';
import Filter from '../Filter';
import SearchBtn from '../SearchBtn';
import SearchBar from '../SearchBar';
import ActiveOptionBar from '../ActiveOptionBar';

export default function OptionBar() {
  return (
    <div>
      <S.FilterList>
        <SearchBtn />
        <Filter text="세일상품" />
        <Filter text="단독상품" />
        <Filter text="품절포함" />
      </S.FilterList>
      {/* TODO: 기능에 따라 노출여부 수정*/}
      <SearchBar />
      <ActiveOptionBar />
    </div>
  );
}
