import React from 'react';
import { StyleSheet } from 'react-native';

import { Appbar } from 'react-native-paper';

const Header = () => {
    return <>
        <Appbar.Header>
            <Appbar.Content
                title="Todo app"
            />
        </Appbar.Header>
    </>;
};

const styles = StyleSheet.create({
 
});

export default Header;