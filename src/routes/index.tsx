import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { AppRoutes } from './app.routes';

export const Routes = () => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.base.gray[600],
      }}
    >
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
};
