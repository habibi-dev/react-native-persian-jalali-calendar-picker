import {View} from 'react-native';
import React, {useState} from 'react';
import Header from './template/Header';
import Week from './template/Week';
import Days from './template/Days';
import GestureRecognizer from './lib/GestureRecognizer';
import Month from './template/Month';
import Year from './template/Year';
import Clock from './template/Clock';

const main_style = {
    wrap: {
        flex: 1,
    },
    wrapMont: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        right: 0,
        left: 0,
        zIndex: 222,
        top: 0,
        bottom: 0,
        backgroundColor: '#fff',
    },
};

const Months = (props, setActive) => {
    const {styleWrapMont = {}} = props;

    return (
        <View style={[main_style.wrapMont, styleWrapMont]}>
            <Month {...props} setActive={setActive}/>
        </View>
    );
};

const Years = (props, setActive) => {
    const {styleWrapMont = {}} = props;

    return (
        <View style={[main_style.wrapMont, styleWrapMont]}>
            <Year {...props} setActive={setActive}/>
        </View>
    );
};

const clock = (props, setActive) => {
    const {styleWrapMont = {}} = props;

    return (
        <View style={[main_style.wrapMont, styleWrapMont]}>
            <Clock {...props} setActive={setActive}/>
        </View>
    );
};

export default (props) => {
    const {styleWrap = {}, previousMonth, nextMonth} = props;
    const [active, setActive] = useState('');

    return (
        <View style={{position: 'relative'}}>
            <GestureRecognizer
                onSwipeUp={previousMonth}
                onSwipeDown={nextMonth}
                onSwipeLeft={previousMonth}
                onSwipeRight={nextMonth}
                style={[main_style.wrap, styleWrap]}>
                <Header {...props} setActive={setActive}/>
                <Week {...props}/>
                <Days {...props}/>
            </GestureRecognizer>
            {active === 'month' ? Months(props, setActive) : null}
            {active === 'years' ? Years(props, setActive) : null}
            {active === 'clock' ? clock(props, setActive) : null}
        </View>

    );

};
