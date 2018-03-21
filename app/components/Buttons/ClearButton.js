import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ClearButton = ({text, onPress}) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.wrapper}>
            <Image resizeMode="contain" style={styles.icon} source={require('./images/icon.png')}/>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
);

ClearButton.prototype = {
    text: PropTypes.string,
    onPress: PropTypes.func
};
export default ClearButton;