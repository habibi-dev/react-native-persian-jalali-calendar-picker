# React Native Persian Jalali Calendar Picker 📆
The package is both **Android** and **iOS** compatible.

<div style="display:flex;flex-wrap:wrap">
<img width="330" src="https://raw.githubusercontent.com/habibi-dev/react-native-persian-jalali-calendar-picker/master/demo/calender.png" />
<img width="330" src="https://raw.githubusercontent.com/habibi-dev/react-native-persian-jalali-calendar-picker/master/demo/clock.png" />
<img width="330" src="https://raw.githubusercontent.com/habibi-dev/react-native-persian-jalali-calendar-picker/master/demo/month.png" />
<img width="330" src="https://raw.githubusercontent.com/habibi-dev/react-native-persian-jalali-calendar-picker/master/demo/years.png" />
</div>


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
|**`animation`**|Name of the animation, see below for available animations. |*None*|
