# React Native Persian Jalali Calendar Picker 📆
![npm bundle size](https://img.shields.io/bundlephobia/min/react-native-persian-jalali-calendar-picker)
![npm](https://img.shields.io/npm/dw/react-native-persian-jalali-calendar-picker)
![npm](https://img.shields.io/npm/l/react-native-persian-jalali-calendar-picker)
![npm](https://img.shields.io/npm/v/react-native-persian-jalali-calendar-picker)
![Cirrus CI - Base Branch Build Status](https://img.shields.io/cirrus/github/habibi-dev/react-native-persian-jalali-calendar-picker)
![GitHub issues](https://img.shields.io/github/issues/habibi-dev/react-native-persian-jalali-calendar-picker)

Jalali Calendar Picker component for react native.

## Installation
```
$ npm install --save react-native-persian-jalali-calendar-picker
$ npm install --save moment-jalaali
```

## Usage
```
import JalaliCalendarPicker from 'react-native-persian-jalali-calendar-picker';
```

```
<JalaliCalendarPicker onDateChange={date => console.log(date) }/>
```
## Properties
*Note: Other properties will be passed down to underlying component.*

| Prop | Description | Default |
|---|---|---|
|**`styleWrap`**| Style for wrap View |*None*|
|**`headerStyleWrap`**| Style for header wrap View |*None*|
|**`headerStyleText`**| Style for header wrap Text |*None*|
|**`headerStyleWrapCenter`**| Style for header wrap View center |*None*|
|**`headerStyleTextCenter`**| Style for header wrap Text center |*None*|
|**`weekStyleWrap`**| Style for week wrap View |*None*|
|**`weekStyleText`**| Style for week wrap Text |*None*|
|**`maxY`**| Maximum selected year  |*1400*|
|**`minY`**| Minimum selected year ex:1400 |*current*|
|**`Time`**| Time feature on or off  |*false*|
|**`primaryColor`**| Primary Color  |*#2980b9*|
|**`selected`**| Date selected (format : jYYYY/jMM/jDD)  |*None*|
|**`currentTime`**| Time selected (format : HH:mm)  |*00:00*|
|**`min`**| Minimum selected date (format : jYYYY/jMM/jDD) |*None*|
|**`onDateChange`**| Callback selected date and time (format : jYYYY/jMM/jDD HH:mm) |*None*|

## Preview
<div style="display:flex;flex-wrap:wrap">
<img width="400" src="https://raw.githubusercontent.com/habibi-dev/react-native-persian-jalali-calendar-picker/master/demo/calender.png" />
<img width="400" src="https://raw.githubusercontent.com/habibi-dev/react-native-persian-jalali-calendar-picker/master/demo/clock.png" />
<img width="400" src="https://raw.githubusercontent.com/habibi-dev/react-native-persian-jalali-calendar-picker/master/demo/month.png" />
<img width="400" src="https://raw.githubusercontent.com/habibi-dev/react-native-persian-jalali-calendar-picker/master/demo/years.png" />
</div>
