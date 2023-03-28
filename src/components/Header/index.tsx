import * as S from './styles';
import LogoImg from '@assets/logo.png';
import { useNavigation } from '@react-navigation/native';

type Props = {
  showBackButton?: boolean;
};

export const Header = ({ showBackButton = false }: Props) => {
  const navigate = useNavigation();

  const handleGoBack = () => {
    navigate.navigate('groups');
  };

  return (
    <S.Container>
      {showBackButton && (
        <S.BackButton onPress={handleGoBack}>
          <S.BackIcon />
        </S.BackButton>
      )}

      <S.Logo source={LogoImg} />
    </S.Container>
  );
};

export default Header;
