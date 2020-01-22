import React from 'react';
import { 
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

import { List  } from 'react-native-paper';

const TodoItem = ({todoItem, toggleDone, removeTodo}) => {

    return (
        <>
            <TouchableOpacity onPress={()=>toggleDone(todoItem)}>
                <List.Item
                    title = { 
                        <Text style={ todoItem.done? { textDecorationLine: 'line-through', textDecorationStyle: 'solid' } : null}>
                            {todoItem.title}
                        </Text> 
                    }
                    right={() =>
                        <TouchableOpacity onPress={ () => removeTodo(todoItem)}>
                            <List.Icon icon="delete" />
                        </TouchableOpacity>}
                />
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    
});

export default TodoItem;