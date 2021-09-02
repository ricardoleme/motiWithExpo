import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Botao } from '../Botao';

export function Rodape() {
  return (
    <View>
      <Text style={styles.titulo}>
        Catupiry e Bacon
      </Text>

      <Text style={styles.descricao}>
      Pão da Casa, Molho de Tomate Especial, Hambúrguer, Catupiry (de verdade!) e Bacon crocante.
      </Text>

      <View style={styles.rodape}>
        <Text style={styles.preco}>
          R$ 29
        </Text>

        <Botao />
      </View>
    </View>
  );
}