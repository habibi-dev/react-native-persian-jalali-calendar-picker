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
    textClock: {
        padding: 2,
        color: '#666',
        fontFamily: 'Shabnam-Light-FD',
        fontSize: 13,
    },
};

export default (props) => {
    const {
        headerStyleWrap = {},
        headerStyleText = {},
        headerStyleTextCenter = {},
        headerStyleWrapCenter = {},
        headerStyleTextClock = {},
        Time, previousMonth, nextMonth, current, setActive, currentTime,
    } = props;

    return (
        <View style={[main_style.wrap, headerStyleWrap]}>
            <TouchableOpacity onPress={() => nextMonth()}>
                <Text style={[main_style.text, headerStyleText]}>ماه بعد</Text>
            </TouchableOpacity>
            <View style={[main_style.wrapCenter, headerStyleWrapCenter]}>
                {Time ? (
                    <TouchableOpacity onPress={() => setActive('clock')}>
                        <Text style={[main_style.textClock, headerStyleText, headerStyleTextClock]}>
                            {currentTime} - </Text>
                    </TouchableOpacity>
                ) : null}

                <TouchableOpacity onPress={() => setActive('years')}>
                    <Text style={[main_style.textCenter, headerStyleText, headerStyleTextCenter]}>
                        {current.format('jYYYY')}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActive('month')}>
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
