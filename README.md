# Projeto Moti com Expo
> Exemplo de UI em Expo com animações utilizando o Moti

Projeto utilizado nas aulas de Programação para Dispositivos Móveis na FATEC Itu. (Faculdade de Tecnologia Dom Amaury Castanho).  
A Fatec Itu é uma faculdade pública e gratuita do Centro Paula Souza, órgão pertencente ao Governo do Estado de São Paulo. 

## Criando o projeto do zero
```
expo init nomeprojeto
cd nomeprojeto
expo install react-native-reanimated
expo install expo-font @expo-google-fonts/roboto @expo-google-fonts/ubuntu
expo install expo-app-loading
yarn add moti *ou* npm i moti
```

Edite o arquivo **babel.config.js** e informe logo após **presets**:
```
plugins: ['react-native-reanimated/plugin'],
```
## Clonando o projeto sem as animações
```
git clone https://github.com/ricardoleme/motiWithExpo
cd motiWithExpo
npm i
expo start
```

## Meta

Prof. Ricardo Leme – [@ricardoleme](https://twitter.com/ricardorleme) – ricardo.leme@fatec.sp.gov.br

Distribuído sob a licença [MIT](https://opensource.org/licenses/MIT).



## Agradecimentos
Agradeço à RocketSeat pelo vídeo introdutório ao assunto, disponível em <https://www.youtube.com/watch?v=wb6bHqSQAgc> no qual este projeto foi inspirado.

**Software Livre é vida! :brazil:🐧**