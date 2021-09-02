import React from 'react';
import { View } from 'react-native';

import { Cabecalho } from '../../components/Cabecalho';
import { Rodape } from '../../components/Rodape';
import { Etiqueta } from '../../components/Etiqueta';
import { Prato } from '../../components/Prato';

import { styles } from './styles';

export function Detalhes() {
  return (
    <View style={styles.container}>
      <Cabecalho />
      <Etiqueta />
      <Prato />
      <Rodape />
    </View >
  );
}