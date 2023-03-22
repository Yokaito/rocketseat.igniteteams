import * as S from './styles';
import LogoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
};

export const Header = ({ showBackButton = false }: Props) => {
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
      )}

      <S.Logo source={LogoImg} />
    </S.Container>
  );
};

export default Header;
