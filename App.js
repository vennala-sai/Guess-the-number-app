import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
import { ImageBackground, StyleSheet, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const[userNumber, setUserNumber] = useState();
  const[isGameOver, setIsGameOver] = useState(true);

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  }
  function gameOverHandler(){
    setIsGameOver(true)
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>
  if (userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  if (isGameOver && userNumber){
    screen = <GameOverScreen/>
  }
  
  return (
    //check docs to see how LinearGradient works and how to get it working
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      {/* <View style={styles.rootScreen}> */}
      <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.bgImage}>
        {/* <StartGameScreen /> -dymanic way below*/}
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
      {/* </View> */}
      
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    //backgroundColor: '#ddb52f'
  },
  bgImage: {
    opacity: 0.15
  }
});
