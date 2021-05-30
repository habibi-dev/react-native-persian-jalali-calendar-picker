import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import moment from 'moment-jalaali';

const main_style = {
    wrap: {
        flex: 1,
        padding: 5,
    },
    TouchableOpacity: {
        borderRadius: 5,
        width: '22%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        margin: 2,

    },
    textY: {
        fontFamily: 'Shabnam-FD',
        fontSize: 17,
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
        flex: 1,
        backgroundColor: '#efefef',
        marginBottom: 5,
        paddingBottom: 10,
        paddingTop: 10,
        borderRadius: 20,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
};

function Selected(y, setCurrent, current, setActive) {
    return () => {
        setCurrent(moment(`${y}/${current.format('jMM')}`, 'jYYYY/jMM'));
        setActive('calender');
    };
}

const scrollToCenter = (MyRef, height) => {
    MyRef.current.scrollTo({x: 0, y: height / 2.1, animated: true});
};

function Years(props) {
    let MyRef = React.createRef(), i = 0, element = [];
    const {current, minY, maxY, primaryColor, setCurrent, setActive} = props,
        y = parseInt(current.format('jYYYY'));

    while (i <= maxY) {
        if (i === 0) {
            i = minY === null ? moment().format('jYYYY') : minY;
        }
        element.push(
            <TouchableOpacity
                onPress={Selected(i, setCurrent, current, setActive)} key={i}
                style={[main_style.TouchableOpacity, y === i ? {backgroundColor: primaryColor} : {}]}>
                <Text style={[main_style.textY, y === i ? main_style.active : {}]}>{i}</Text>
            </TouchableOpacity>,
        );
        i++;
    }

    return (
        <View style={main_style.ScrollView}>
            <ScrollView
                // onContentSizeChange={(width, height) => scrollToCenter(MyRef, height)}
                showsHorizontalScrollIndicator={false} ref={MyRef}
                removeClippedSubviews={true}
                contentContainerStyle={main_style.contentContainer}>
                {element}
            </ScrollView>
        </View>
    );
}

export default (props) => {
    const {
        setActive,
    } = props;

    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
                <TouchableOpacity onPress={() => setActive('calender')} style={{paddingRight: 20}}>
                    <Text style={main_style.backText}>×</Text>
                </TouchableOpacity>
            </View>
            <View style={main_style.wrap}>
                {Years(props)}
            </View>
        </View>
    );
};
