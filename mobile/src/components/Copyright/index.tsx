import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

// import { Container } from './styles';

const Copyright: React.FC = () => {
  return (
    <View>
      <Text style={styles.text}>
        Feito com ❤ pela Rocketseat
      </Text>
    </View>  
  );
}

export default Copyright;