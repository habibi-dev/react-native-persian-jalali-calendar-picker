import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const main_style = {
    wrap: {
        padding: 5,
    },
    TouchableOpacity: {
        borderRadius: 5,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: 7,

    },
    textY: {
        fontFamily: 'Shabnam-FD',
        fontSize: 17,
        width: 30,
        textAlign: 'center',
        color: '#555',
    },
    backText: {
        fontSize: 25,
        color: '#555',
    },
    active: {
        color: '#ffffff',
    },
    ScrollView: {
        backgroundColor: '#efefef',
        marginBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 20,
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#555',
        borderRadius: 20,
        padding: 10,
        paddingRight: 30,
        paddingLeft: 30,
    },
    buttonText: {
        fontFamily: 'Shabnam-FD',
        color: '#ffffff',
    },
};

const MGenerate = (props, min, setMin) => {
    const {primaryColor} = props;

    let element = [], i = 0;

    while (i < 60) {

        let n = String(i).padStart(2, '0');

        element.push(
            <TouchableOpacity onPress={() => setMin(n)} style={[main_style.TouchableOpacity,
                n === min ? {backgroundColor: primaryColor} : {}]} key={i}>
                <Text style={[main_style.textY, n === min ? main_style.active : {}]}>{n}</Text>
            </TouchableOpacity>,
        );
        i++;
    }

    return element;
};

const HGenerate = (props, h, setH) => {

    const {primaryColor} = props;

    let element = [], i = 0;
    while (i < 24) {

        let n = String(i).padStart(2, '0');

        element.push(
            <TouchableOpacity onPress={() => setH(n)} style={[main_style.TouchableOpacity,
                n === h ? {backgroundColor: primaryColor} : {}]} key={i}>
                <Text style={[main_style.textY, n === h ? main_style.active : {}]}>{n}</Text>
            </TouchableOpacity>,
        );
        i++;
    }

    return element;
};

function M(props, h, setH, min, setMin) {

    return (
        <View>
            <View style={main_style.ScrollView}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    removeClippedSubviews={true}>
                    {HGenerate(props, h, setH)}
                </ScrollView>
            </View>
            <View style={[main_style.ScrollView, {marginTop: 10}]}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    removeClippedSubviews={true}>
                    {MGenerate(props, min, setMin)}
                </ScrollView>
            </View>
        </View>
    );
}

function selected(setCurrentTime, h, min, setActive) {
    setCurrentTime(`${h}:${min}`);
    setActive('calender');
}

export default (props) => {
    const {setActive, setCurrentTime, primaryColor, currentTime} = props;
    const [h, setH] = useState('');
    const [min, setMin] = useState('');

    useEffect(() => {
        if (min === '') {
            const time = currentTime.split(':');
            setH(time[0]);
            setMin(time[1]);
        }
    });

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 0, flexDirection: 'row', alignItems: 'center', padding: 10}}>
                <TouchableOpacity onPress={() => setActive('calender')} style={{paddingRight: 20}}>
                    <Text style={main_style.backText}>×</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
                {M(props, h, setH, min, setMin)}
                <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => selected(setCurrentTime, h, min, setActive)}
                                      style={[main_style.button, {backgroundColor: primaryColor}]}>
                        <Text style={main_style.buttonText}>انتخاب</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
