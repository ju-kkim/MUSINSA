import * as S from './style';
import Item from './Item';
import { goodsItem, goodsType } from '../store/goods';

export default function GoodsList({ data }: { data: goodsType }) {
  return (
    <S.GoodsList>
      {data.map((goods: goodsItem, idx) => (
        <Item key={idx} goods={goods}></Item>
      ))}
    </S.GoodsList>
  );
}
