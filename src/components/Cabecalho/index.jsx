import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { MotiView } from 'moti'

import { styles } from './styles';
import { theme } from '../../styles/theme';

export function Cabecalho() {
  return (
    <MotiView 
     from={{
       opacity: 0,
       scale: 1.3
     }}
     animate={{
       opacity: 1,
       scale: 1
     }}
     transition={{
       type: 'timing',
       duration: 3000
     }}

     /* No type da transition, podemos informar:
    timing: realiza a movimentação em um determinado intervalo de tempo.
    spring: cria um movimento oscilatório inspirado em uma mola.
    decay: o movimento começa com uma certa velocidade que diminui até parar.
      */
    
    style={styles.container}>
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
    </MotiView>
  );
}