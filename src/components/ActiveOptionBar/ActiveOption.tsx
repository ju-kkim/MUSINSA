import * as S from './style';
import Icon from '../Icon';

export default function ActiveOption({ text }: ActiveOptionProps) {
  return (
    <S.ActiveOption>
      <span>{text}</span>
      <Icon icon="Close" width="14px" />
    </S.ActiveOption>
  );
}

type ActiveOptionProps = {
  text: string;
};
