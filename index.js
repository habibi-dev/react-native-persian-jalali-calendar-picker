import React, {Component} from 'react';
import moment from 'moment-jalaali';
import Template from './Tepmlate';

export default class JalaliCalendarPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            current: moment(),
            currentTime: '00:00',
            f: true,
            minY: null,
            maxY: 1455,
            Time: false,
            primaryColor: '#2980b9',
        };
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if (this.props.hasOwnProperty('selected') && this.props.selected && this.state.f) {
            this.setState({
                current: moment(this.props.selected, 'jYYYY/jMM/jDD'),
                currentTime: this.props.hasOwnProperty('currentTime') && this.props.currentTime ? this.props.currentTime : '00:00',
                f: false,
            });
        }
    }

    nextMonth() {
        let {current} = this.state;
        this.setState({current: moment(current.add(1, 'month').format('jYYYY/jMM/jDD'), 'jYYYY/jMM/jDD')});
        return true;
    }

    previousMonth() {
        let {current} = this.state;
        this.setState({current: moment(current.add(-1, 'month').format('jYYYY/jMM/jDD'), 'jYYYY/jMM/jDD')});
        return true;
    }

    setSelected(date) {
        this.setState({selected: date});

        if (this.props.hasOwnProperty('Time') && this.props.Time) {
            date = `${date} ${this.state.currentTime}`;
        }

        this.props.onDateChange(date);
        return true;
    }

    setCurrent(date) {
        this.setState({current: date});
        return true;
    }

    setCurrentTime(time) {
        this.setState({currentTime: time});

        if (this.props.hasOwnProperty('selected') && !this.state.selected) {
            if (this.props.selected === 'null' || this.props.selected === null) {
                this.props.onDateChange(`${this.state.current.format('jYYYY/jMM/jDD')} ${time}`);
            } else {
                this.props.onDateChange(`${this.props.selected} ${time}`);
            }
        } else {
            console.log(2);
            this.props.onDateChange(`${this.state.selected ?
                this.state.selected : this.state.current.format('jYYYY/jMM/jDD')} ${time}`);
        }
        return true;
    }

    render() {

        return <Template
            {...this.state} {...this.props} nextMonth={this.nextMonth.bind(this)}
            setCurrent={this.setCurrent.bind(this)} setCurrentTime={this.setCurrentTime.bind(this)}
            selected={this.state.selected ? this.state.selected : this.props.selected}
            previousMonth={this.previousMonth.bind(this)} setSelected={this.setSelected.bind(this)}/>;
    }
}
