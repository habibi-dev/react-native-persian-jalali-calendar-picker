import React, {Component} from 'react';
import moment from 'moment-jalaali';
import Template from './Tepmlate';

export default class JalaliCalendarPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false,
            current: moment(),
            primaryColor: '#2980b9',
        };
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
        return true;
    }

    render() {

        return <Template {...this.state} {...this.props} nextMonth={this.nextMonth.bind(this)}
                         selected={this.state.selected ? this.state.selected : this.props.selected}
                         previousMonth={this.previousMonth.bind(this)} setSelected={this.setSelected.bind(this)}/>;
    }
}
