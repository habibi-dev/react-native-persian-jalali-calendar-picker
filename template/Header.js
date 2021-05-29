import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const main_style = {
    wrap: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    wrapCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'Shabnam-FD',
    },
    textCenter: {
        padding: 2,
        fontFamily: 'Shabnam-Bold-FD',
        fontSize: 15,
    },
};

export default (props) => {
    const {
        headerStyleWrap = {},
        headerStyleText = {},
        headerStyleTextCenter = {},
        headerStyleWrapCenter = {},
        previousMonth, nextMonth, current,
    } = props;

    return (
        <View style={[main_style.wrap, headerStyleWrap]}>
            <TouchableOpacity onPress={() => nextMonth()}>
                <Text style={[main_style.text, headerStyleText]}>ماه بعد</Text>
            </TouchableOpacity>
            <View style={[main_style.wrapCenter, headerStyleWrapCenter]}>
                <TouchableOpacity>
                    <Text style={[main_style.textCenter, headerStyleText, headerStyleTextCenter]}>
                        {current.format('jYYYY')}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={[main_style.textCenter, headerStyleText, headerStyleTextCenter]}>
                        {current.format('jMMMM')}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => previousMonth()}>
                <Text style={[main_style.text, headerStyleText]}>ماه قبل</Text>
            </TouchableOpacity>
        </View>
    );
};
