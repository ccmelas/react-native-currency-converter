import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { ListItem, Separator } from './../components/Lists';
import { changePrimaryColor } from './../actions/themes';

const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $green: '$primaryGreen',
    $orange: '$primaryOrange',
    $purple: '$primaryPurple'   
});

class Themes extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func
    };

    handleThemePress = (color) => {
        this.props.dispatch(changePrimaryColor(color));
        this.props.navigation.goBack();
    }

    render() {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default"/>
                <ListItem
                    text="Blue"
                    onPress={() => this.handleThemePress(styles.$blue)}
                    selected
                    checkMark={false}
                    iconBackground={styles.$blue}
                    />
                <ListItem
                    text="Green"
                    onPress={() => this.handleThemePress(styles.$green)}
                    selected
                    checkMark={false}
                    iconBackground={styles.$green}
                    />
                <ListItem
                    text="Orange"
                    onPress={() => this.handleThemePress(styles.$orange)}
                    selected
                    checkMark={false}
                    iconBackground={styles.$orange}
                    />
                <ListItem
                    text="Purple"
                    onPress={() => this.handleThemePress(styles.$purple)}
                    selected
                    checkMark={false}
                    iconBackground={styles.$purple}
                    />
            </ScrollView>
        );
    }
}

export default connect()(Themes);