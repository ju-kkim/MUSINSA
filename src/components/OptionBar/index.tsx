import { useState } from 'react';
import * as S from './style';
import SearchBtn from '../SearchBtn';
import SearchBar from '../SearchBar';
import ActiveOptionBar from '../ActiveOptionBar';
import Filter from '../Filter';

export default function OptionBar() {
  const [isSearchBar, setIsSearchBar] = useState(false);

  const clickSearchBtn = () => {
    setIsSearchBar(!isSearchBar);
  };

  return (
    <div>
      <S.FilterList>
        <SearchBtn onClick={clickSearchBtn} isClick={isSearchBar} />
        <Filter text="세일상품" />
        <Filter text="단독상품" />
        <Filter text="품절포함" />
      </S.FilterList>
      {/* TODO: 기능에 따라 노출여부 수정*/}
      {isSearchBar && <SearchBar />}
      {/* {options.length ? <ActiveOptionBar /> : null} */}
    </div>
  );
}
