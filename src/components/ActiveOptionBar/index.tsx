import * as S from './style';
import Icon from '../Icon';
import ActiveOption from './ActiveOption';

export default function ActiveOptionBar() {
  return (
    <S.ActiveOptionBar>
      <S.ActiveOptionList>
        <ActiveOption text="세일상품" />
      </S.ActiveOptionList>
      <S.ResetBtn type="button">
        <Icon icon="Reset" width="50px" />
      </S.ResetBtn>
    </S.ActiveOptionBar>
  );
}
