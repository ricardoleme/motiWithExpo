import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../styles/theme';

export function Cabecalho() {
  return (
    <View style={styles.container}>
      <Feather
        name="arrow-left"
        color={theme.colors.brown}
        size={32}
      />

      <View>
        <Text style={styles.titulo}>
          iFome 
        </Text>

        <Text style={styles.subtitulo}>
          Hamburgueria
        </Text>
      </View>
    </View>
  );
}