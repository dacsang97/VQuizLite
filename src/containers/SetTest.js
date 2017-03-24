import React, { Component } from 'react';
import { InputText } from '../components';
import { Button, CardBlock, Card } from 'reactstrap';
import ClockPicker from '../components/clock-picker';

export default class SetTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: 12,
            minutes: 20,
            enabled: true
        };
    }
    render() {
        let { hours, minutes, enabled } = this.state;
        let checkbox = <input type="checkbox" checked={this.state.enabled} onChange={(e) => this.setState({ enabled: e.target.checked })} />;
        return (
            <Card>
                <CardBlock>
                    <h2>You select SET XXXYYY</h2>
                    <p>SET XXYYY has 16 questions.</p>
                    <InputText label="Enter a number of question" type="text"/>
                    <ClockPicker
                        addonBefore={checkbox}
                        placement='bottom'
                        disabled={!enabled}
                        hours={hours}
                        minutes={minutes}
                        onChange={(hours, minutes) => this.setState({ hours, minutes })} />
                    <Button>Test Now</Button>
                </CardBlock>

            </Card>
        )
    }
}