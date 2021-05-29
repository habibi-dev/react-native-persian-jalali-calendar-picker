import {Text, View} from 'react-native';
import React from 'react';

const main_style = {
    wrap: {
        flex: 1,
        padding: 5,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#555',
        borderRadius: 5,
    },
    text: {
        fontFamily: 'Shabnam-Light-FD',
        fontSize: 14,
        color: '#ffffff',
        flex: 1,
        textAlign: 'center',
        paddingBottom: 4,
    },
};

export default (props) => {
    const {
        weekStyleWrap = {},
        weekStyleText = {},
        weeks = [
            'ش',
            'ی',
            'د',
            'س',
            'چ',
            'پ',
            'ج',
        ],
    } = props;

    return (
        <View style={[main_style.wrap, weekStyleWrap]}>
            {
                weeks.map(week => (<Text style={[main_style.text, weekStyleText]}>{week}</Text>))
            }
        </View>
    );
};
