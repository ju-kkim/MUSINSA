import { useContext, useEffect, useState } from 'react';
import { useFetch } from '../../hooks/usefetch';
import { DATA_URL } from '../../constant/URL';
import * as S from './style';
import GoodsList from '../../components/GoodsList';
import { goodsContext } from '../../components/store/goods';
import LoadingIndicator from '../../components/LoadingIndicator';

export default function MainContents() {
  const { showGoods, setShowGoods, allGoods } = useContext(goodsContext);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageOrder, setPageOrder] = useState(0);
  const pages = ['goods0', 'goods1', 'goods2', 'goods3'];
  const fetchUrl = `${DATA_URL}${pages[pageOrder]}.json`;
  const throttleTime = 300;
  let throttle = false;
  const DOCUMENT_ELEMENT = document.documentElement;

  useEffect(() => {
    getGoods();
    window.addEventListener('scroll', scrollHandler);
  }, []);

  useEffect(() => {
    if (!isScrollEnd) return;
    getGoods();
  }, [isScrollEnd]);

  useEffect(() => {
    if (showGoods.length === 0) return;
    const browserHeight = DOCUMENT_ELEMENT.clientHeight;
    const documentHeight = document.body.clientHeight;
    if (documentHeight < browserHeight) getGoods();
  }, [showGoods]);

  const getGoods = async () => {
    if (isLoading || pageOrder === pages.length) return;
    const { data } = await useFetch(fetchUrl, setIsLoading);
    allGoods.push(...data.list);
    const filterGoods = allGoods.filter((goods) => goods.isSoldOut === false);
    setShowGoods(filterGoods);
    setPageOrder(pageOrder + 1);
    setIsScrollEnd(false);
  };

  const scrollHandler = () => {
    if (throttle) return;
    throttle = true;
    setTimeout(() => {
      const scrollTop = DOCUMENT_ELEMENT.scrollTop;
      const scrollHeight = DOCUMENT_ELEMENT.scrollHeight;
      const clientHeight = DOCUMENT_ELEMENT.clientHeight;
      if (scrollTop + clientHeight >= scrollHeight) {
        setIsScrollEnd(true);
      }
      throttle = false;
    }, throttleTime);
  };

  return (
    <S.MainContents>
      <GoodsList data={showGoods}></GoodsList>
      {isLoading && <LoadingIndicator />}
    </S.MainContents>
  );
}
