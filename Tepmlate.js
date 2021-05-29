import {View} from 'react-native';
import React from 'react';
import Header from './template/Header';
import Week from './template/Week';
import Days from './template/Days';
import {PanGestureHandler} from 'react-native-gesture-handler';

const main_style = {
    wrap: {
        flex: 1,
    },
};

export default (props) => {
    const {styleWrap = {}} = props;

    return (
        <PanGestureHandler onGestureEvent={(e) => console.log(this)}>
            <View style={[main_style.wrap, styleWrap]}>
                <Header {...props}/>
                <Week  {...props}/>
                <Days  {...props}/>
            </View>
        </PanGestureHandler>
    );
};
