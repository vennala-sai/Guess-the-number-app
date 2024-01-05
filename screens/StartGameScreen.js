import { TextInput, View, StyleSheet, ImageBackground, Alert, Text } from "react-native";
import { useState } from "react";
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
function StartGameScreen({ onPickedNumber }) {
    const [enteredNum, setEnteredNum] = useState('');
    function textInputHandler(enteredText) {
        setEnteredNum(enteredText);
    }
    function resetInputHandler(){
        setEnteredNum('');
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNum);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid Number!', 'Number should be between 0 and 99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }
        onPickedNumber(chosenNumber);

    }
    return(
        <View style={styles.rootContainer}>
            <Title>Guess the Number</Title>
            <View style = {styles.inputContainer}>
                <Text style={styles.insText}>Enter a Number</Text>
                <TextInput style = {styles.textInput} maxLength={2} keyboardType="number-pad" onChangeText={textInputHandler} value={enteredNum}/>
                <View style = {styles.buttonsContainer}>
                    <View style = {styles.buttonContainer}>
                        <PrimaryButton whenPressed={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style = {styles.buttonContainer}>
                        <PrimaryButton whenPressed={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    inputContainer: {
        alignItems: "center",
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colors.primary800,
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 2,
        shadowOpacity: 1,
    },
    insText:{
        color: '#ddb52f',
        fontSize: 20
    },
    textInput: {
        fontSize: 32,
        height: 50,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
        width: 50
    },
    buttonsContainer: {
        flexDirection: "row"
    },
    buttonContainer: {
        flex: 1
    }
});