import { Text, View, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
function GameOverScreen() {
    <View style = {styles.container}>
        <Title>Game is Over</Title>
    </View>
}
export default GameOverScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 18,
        borderWidth: 2,
        color: 'white',
        borderColor: '#ddb52f',
        padding: 12,
        textAlign: 'center',
        fontWeight: 'bold'

    }

});