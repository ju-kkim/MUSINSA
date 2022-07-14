import * as S from './style';
import Icon from '../../components/Icon';
import OptionBar from '../../components/OptionBar';

export default function Header() {
  return (
    <S.Header>
      <S.Logo>
        <Icon icon="Logo" width="95px" />
        <span className="hidden">MUSINSA 무신사</span>
      </S.Logo>
      <OptionBar />
    </S.Header>
  );
}
