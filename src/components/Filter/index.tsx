import * as S from './style';

export default function Filter({ text }: FilterProps) {
  return <S.Filter type="button">{text}</S.Filter>;
}

type FilterProps = {
  text: string;
};
