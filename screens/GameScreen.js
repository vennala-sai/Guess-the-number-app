import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import { useEffect } from "react";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Ionicons } from '@expo/vector-icons';
import GameOverScreen from "./GameOverScreen";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    // useEffect seems to execute whenever the variables in the function shown in the brackets change in value.
    useEffect(()=>{
        if (currentGuess === userNumber) {
            onGameOver();
        }
    },[currentGuess, userNumber, onGameOver]);

    //direction should be lower or higher
    function nextGuessHandler(direction) { 
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)){
            Alert.alert("Don't lie!","This is wrong...", [{text: 'Sorry!', style: 'cancel'}]);
            return;
        }
        if (direction === 'lower'){
            maxBoundary = currentGuess;
        }
        else{
            minBoundary = currentGuess + 1;
        }
        const newRandNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandNum);
    }
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text style = {styles.insText}>Higher or Lower</Text>
                <PrimaryButton whenPressed={nextGuessHandler.bind(this, 'lower')}><Ionicons name="md-remove" size={24}/></PrimaryButton>
                <PrimaryButton whenPressed={nextGuessHandler.bind(this, 'higher')}><Ionicons name="md-add" size={24}/></PrimaryButton>
            </View>
            {/* <View>LOG ROUNDS</View> */}
        </View>
        
    )
}
export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40
    },
    insText:{
        color: '#ddb52f',
        fontSize: 20,
        textAlign: 'center'
    },
});