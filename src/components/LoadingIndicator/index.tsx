import * as S from './style';
import Icon from '../Icon';

export default function LoadingIndicator() {
  return (
    <S.LoadingIndicator>
      <Icon icon="Loading" width="16px" />
      <span className="hidden">로딩중</span>
    </S.LoadingIndicator>
  );
}
