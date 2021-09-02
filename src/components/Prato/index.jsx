import React from 'react';
import { styles } from './styles'
import fotoPrato from '../../assets/catubacon.png'

import { MotiImage } from 'moti'

export function Prato() {
  return (
    <MotiImage
      style={styles.prato}
      source={fotoPrato}
      resizeMode="contain"
      from={{
        opacity: 0,
        translateX: 64
      }}
      animate={{
        opacity: 1,
        translateX: 4
      }}
      transition={{
        type: 'timing',
        duration: 3000
      }}
    />
  );
}