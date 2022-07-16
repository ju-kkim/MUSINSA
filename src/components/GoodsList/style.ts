import styled from 'styled-components';
import { COLOR } from '../../styles/color';
import { FONT } from '../../styles/font';
import { mixins } from '../../styles/mixins';

const GoodsList = styled.ul`
  ${mixins.flex({})}
  flex-wrap: wrap;

  @media screen and (min-width: 850px) {
    gap: 10px;
  }
`;

const GoodsItem = styled.li`
  width: 50%;

  @media screen and (min-width: 850px) {
    width: calc(20% - 8px);
  }
`;

const GoodsImgBox = styled.div`
  position: relative;
  width: 100%;
  padding-top: 120%;
  overflow: hidden;
`;

const GoodsLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  text-indent: -9999em;
`;

const GoodsImg = styled.img`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
`;

const SoldOut = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  ${mixins.flex({ align: 'center', justify: 'center' })}
  width: 100%;
  height: 100%;
  font-size: ${FONT.SIZE.LARGE};
  font-weight: ${FONT.WEIGHT.MEDIUM};
  color: ${COLOR.GRAY[600]};
  text-transform: uppercase;
  background: ${COLOR.WHITE};
  opacity: 0.8;
  z-index: 1;
`;

const GoodsInfo = styled.div`
  position: relative;
  padding: 20px 10px;
`;

const ExclusiveLabel = styled.span`
  position: absolute;
  left: 10px;
  top: 0;
  ${mixins.flex({ align: 'center', justify: 'center' })}
  height: 26px;
  padding: 0 6px;
  transform: translateY(-50%);
  font-size: ${FONT.SIZE.SAMLL};
  color: ${COLOR.WHITE};
  background: ${COLOR.GREEN};
  z-index: 1;
`;

const GoodsBrand = styled.a`
  display: block;
  margin-bottom: 8px;
  font-size: ${FONT.SIZE.X_SMALL};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const GoodsName = styled.a`
  display: -webkit-box;
  max-height: 2.57em;
  font-weight: ${FONT.WEIGHT.BOLD};
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const PriceBox = styled.div`
  margin-top: 4px;
  ${mixins.flex({ align: 'center', justify: 'space-between' })}
  font-size: ${FONT.SIZE.MEDIUM};
  font-weight: ${FONT.WEIGHT.MEDIUM};
`;

const SaleRate = styled.p`
  color: ${COLOR.RED};
`;

const NormalPrice = styled.p`
  font-size: ${FONT.SIZE.X_SMALL};
  color: ${COLOR.GRAY[500]};
  text-decoration: line-through;
`;

export {
  GoodsList,
  GoodsItem,
  GoodsImgBox,
  GoodsLink,
  GoodsImg,
  SoldOut,
  GoodsInfo,
  ExclusiveLabel,
  GoodsBrand,
  GoodsName,
  PriceBox,
  SaleRate,
  NormalPrice,
};
