import { createContext, SetStateAction, useState } from 'react';

const allGoods: goodsType = [];

const filterOption: filterOptionType = {
  isSale: true,
  isExclusive: true,
  isSoldOut: false,
};

export const goodsContext = createContext({} as CreateType);

export function GoodsProvider({ children }: { children: React.ReactNode }) {
  const [showGoods, setShowGoods] = useState<goodsType>([]);

  return (
    <goodsContext.Provider value={{ showGoods, setShowGoods, allGoods, filterOption }}>
      {children}
    </goodsContext.Provider>
  );
}

type CreateType = {
  showGoods: goodsType;
  setShowGoods: React.Dispatch<SetStateAction<goodsType>>;
  allGoods: goodsType;
  filterOption: filterOptionType;
};

export type goodsItem = {
  goodsNo: number;
  goodsName: string;
  price: number;
  brandName: string;
  imageUrl: string;
  linkUrl: string;
  brandLinkUrl: string;
  normalPrice: number;
  isSale: boolean;
  saleRate: number;
  isSoldOut: boolean;
  isExclusive: boolean;
};

export type goodsType = goodsItem[];

type filterOptionType = {
  isSale: boolean;
  isExclusive: boolean;
  isSoldOut: boolean;
};
