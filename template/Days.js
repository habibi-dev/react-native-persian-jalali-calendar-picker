import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import moment from 'moment-jalaali';

const main_style = {
    wrap: {
        flex: 1,
        padding: 5,
    },
    text: {
        fontFamily: 'Shabnam-FD',
        fontSize: 17,
        height: 40,
        color: '#555',
        paddingTop: 4,
        marginBottom: 5,
        textAlign: 'center',
        justifyContent: 'center',
    },
    SelectedStyle: {
        color: '#ffffff',
        borderRadius: 5,
    },

    TodayStyle: {
        borderRadius: 5,
        backgroundColor: '#e3e3e3',
    },
    deActive: {
        opacity: .5,
    },
};

function Selected(MaxStyle, MinStyle, setSelected, years, month, day) {
    if (MaxStyle.hasOwnProperty('opacity') || MinStyle.hasOwnProperty('opacity')) {
        return null;
    }
    setSelected(`${years}/${month}/${day}`);
}

const GenerateDays = (props) => {
    const {
        weekStyleWrap = {},
        weekStyleText = {},
        setSelected,
        current, selected, min, max, primaryColor,
    } = props;

    let i = 1,
        month = current.format('jMM'),
        years = current.format('jYYYY'),
        day = moment.jDaysInMonth(parseInt(current.format('jYYYY')), parseInt(current.format('jM'))),
        fw = moment(`${years}/${month}/01`, 'jYYYY/jMM/jDD').format('dddd').charAt(0),
        space = false, days = {}, element = [];

    ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'].map(w => {
        days[w] = [];

        if (fw !== 'ش' && space !== null) {
            space = true;

            if (fw === w) {
                space = null;
            }

            if (space) {
                days[w].push(' ');
            }
        }
    });


    while (day >= i) {
        const
            d = String(i).padStart(2, '0'),
            w = moment(`${years}/${month}/${d}`, 'jYYYY/jMM/jDD').format('dddd').charAt(0);

        if (moment(`${years}/${month}/${d}`, 'jYYYY/jMM/jDD').isValid()) {
            days[w].push(d);
        }
        i++;
    }

    Object.keys(days).map((w, index) => {
            element.push(<View style={[main_style.wrap, weekStyleWrap]} key={index}>{
                days[w].map((day, index) => {

                    const
                        timestamp = parseInt(moment(`${years}/${month}/${day} 00:00`, 'jYYYY/jMM/jDD HH:mm').format('X')),
                        minTimestamp = parseInt(moment(`${min} 00:00`, 'jYYYY/jMM/jDD HH:mm').format('X')),
                        maxTimestamp = parseInt(moment(`${max} 00:00`, 'jYYYY/jMM/jDD HH:mm').format('X'));

                    // Check is friday
                    const color = w === 'ج' ?
                        {color: '#e74c3c'} : {};

                    // Check is selected
                    const SelectedStyle = selected !== null && selected === `${years}/${month}/${day}`
                        ? [main_style.SelectedStyle, {backgroundColor: primaryColor}] : {};

                    // Check is today
                    const TodayStyle = current === `${years}/${month}/${day}`
                        ? main_style.TodayStyle : {};

                    // Check is set minimum date
                    let MinStyle = {};
                    if (min !== null && timestamp < minTimestamp) {
                        MinStyle = main_style.deActive;
                    }

                    // Check is set maximum date
                    let MaxStyle = {};
                    if (max !== null && timestamp > maxTimestamp) {
                        MaxStyle = main_style.deActive;
                    }

                    return (
                        <TouchableOpacity onPress={() => Selected(MaxStyle, MinStyle, setSelected, years, month, day)}
                                          key={index}>
                            <Text style={[
                                main_style.text, weekStyleText, color,
                                TodayStyle, MinStyle, MaxStyle, SelectedStyle]}>
                                {day}
                            </Text>
                        </TouchableOpacity>);
                })
            }</View>);

        },
    );

    return element;
};

export default (props) => {

    return (
        <View style={{flexDirection: 'row-reverse'}}>
            {GenerateDays(props)}
        </View>
    );
}
;
