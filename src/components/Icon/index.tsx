import { ReactComponent as Logo } from '../../assets/Icon/Logo.svg';
import { ReactComponent as Search } from '../../assets/Icon/Search.svg';
import { ReactComponent as Close } from '../../assets/Icon/Close.svg';
import { ReactComponent as Reset } from '../../assets/Icon/Reset.svg';
import { ReactComponent as Loading } from '../../assets/Icon/Loading.svg';

const iconComponents: iconComponentsType = {
  Logo,
  Search,
  Close,
  Reset,
  Loading,
};

export default function Icon({ icon, width, height, fill, stroke }: iconProps) {
  const TargetIcon = iconComponents[icon];
  if (!TargetIcon) {
    throw new Error(`${TargetIcon} 컴포넌트를 찾을 수 없습니다.`);
  }

  return <TargetIcon width={width} height={height} fill={fill} stroke={stroke} />;
}

type iconProps = {
  icon: string;
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
};

type iconComponentsType = {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
};
