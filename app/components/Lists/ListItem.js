import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, Image } from 'react-native';

import styles from './styles';
import Icon from './Icon';

const ListItem = (
    { 
        text, 
        selected = false,                 
        onPress, 
        checkMark = true, 
        visible = true, 
        customIcon = null,
        iconBackground
    }
) => (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
        <View style={styles.row}>
            <Text style={styles.text}>{text}</Text>
            {selected 
                ? <Icon checkMark={checkMark} visible={visible} iconBackground={iconBackground}/> 
                : <Icon/>
            }
            {customIcon}
        </View>
    </TouchableHighlight>
);

ListItem.propTypes = {
    text: PropTypes.string,
    selected: PropTypes.bool,
    onPress: PropTypes.func,
    checkMark: PropTypes.bool,
    visible: PropTypes.bool,
    iconBackground: PropTypes.string
};

export default ListItem;