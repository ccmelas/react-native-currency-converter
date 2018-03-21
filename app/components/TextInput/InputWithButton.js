import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, TouchableHighlight, TextInput} from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
    const { onPress, buttonText, editable = true, textColor } = props;
    const containerStyles = [styles.container];

    const underlayColor = color(styles.$buttonBackgroundColorBase)
                        .darken(styles.$buttonBackgroundColorModifier);

    if (editable === false) {
        containerStyles.push(styles.containerDisabled);
    }

    const buttonTextStyles = [styles.buttonText];
    if (textColor) buttonTextStyles.push({color: textColor});
    return (
        <View style={containerStyles}>
            <TouchableHighlight underlayColor={underlayColor} style={styles.buttonContainer} onPress={onPress}>
                <Text style={buttonTextStyles}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border}/>
            <TextInput style={styles.input} underlineColorAndroid="transparent" {...props}/>
        </View>
    );
}

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool
};
export default InputWithButton;