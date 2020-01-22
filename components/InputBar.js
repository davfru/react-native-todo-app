import React from 'react';
import { 
    StyleSheet, 
    View, 
} 
from 'react-native';

import {
    IconButton, 
    Colors, 
    TextInput 
} from 'react-native-paper';

const InputBar = ({ term, onTermChange, onTermSubmit }) => {

    return (
        <View style={styles.inputContainer}>
            <TextInput
                mode="Outlined"
                placeholder="Todo..."
                style={styles.input}
                value={term}
                onChangeText={onTermChange}
            />
            <IconButton
                icon="plus"
                color={Colors.black}
                size={20}
                onPress={onTermSubmit}
                
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
    },
    input: {
        backgroundColor: 'white',
        flex: 1,
        fontSize: 18,
        height: 35
    }
});

export default InputBar;