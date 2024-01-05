import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';
function PrimaryButton({children, whenPressed }) {
    return (
        <View style={styles.inputOuterContainer}>
            <Pressable style={({pressed}) => pressed? [styles.pressedIOS, styles.inputInnerContainer] : styles.inputInnerContainer} onPress={whenPressed} android_ripple={{color: '#640233'}}>    
                <Text style = {styles.inputText}>{children}</Text>
            </Pressable>
        </View>
    )
}
export default PrimaryButton;

const styles = StyleSheet.create({
    inputOuterContainer: {
        margin: 4,
        borderRadius: 28,
        overflow: 'hidden'
        
    },
    inputInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    inputText: {
        color: 'white',
        textAlign: 'center'
    },
    pressedIOS : {
        opacity: 0.75
    }
});