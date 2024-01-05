import { StyleSheet, Text } from "react-native";

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        borderWidth: 2,
        color: 'white',
        borderColor: '#ddb52f',
        padding: 12,
        textAlign: 'center',
        fontWeight: 'bold'

    }
});