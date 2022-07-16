import { useEffect, useState } from 'react';
import { DUMMY_IMG } from '../../constant/URL';
import { goodsItem } from '../store/goods';
import * as S from './style';

export default function Item({ goods }: { goods: goodsItem }) {
  const goodsImg = goods.imageUrl;

  const [imgUrl, setImgUrl] = useState(goodsImg);

  const checkImgUrl = async () => {
    try {
      const response = await fetch(goodsImg);
      const isImgUrl = response.ok;
      if (!isImgUrl) setImgUrl(DUMMY_IMG);
    } catch (e) {
      console.log(e, 'asdfasdfasdfasd');
    }
  };

  useEffect(() => {
    checkImgUrl();
  }, []);

  return (
    <S.GoodsItem>
      <S.GoodsImgBox>
        {goods.isSoldOut && <S.SoldOut>sold out</S.SoldOut>}
        <S.GoodsImg src={imgUrl} alt={goods.goodsName + ' 이미지'} />
        <S.GoodsLink href={goods.linkUrl}>상품 자세히보기</S.GoodsLink>
      </S.GoodsImgBox>
      <S.GoodsInfo>
        {goods.isExclusive && <S.ExclusiveLabel>단독</S.ExclusiveLabel>}
        <S.GoodsBrand href={goods.brandLinkUrl}>{goods.brandName}</S.GoodsBrand>
        <S.GoodsName href={goods.linkUrl}>{goods.goodsName}</S.GoodsName>
        <div>
          <S.PriceBox>
            <p>{convertPriceToLocaleString(goods.price)}원</p>
            {goods.isSale && <S.SaleRate>{goods.saleRate}%</S.SaleRate>}
          </S.PriceBox>
          {goods.isSale && (
            <S.NormalPrice>{convertPriceToLocaleString(goods.normalPrice)}원</S.NormalPrice>
          )}
        </div>
      </S.GoodsInfo>
    </S.GoodsItem>
  );
}

function convertPriceToLocaleString(price: number) {
  return price.toLocaleString('ko-KR');
}
