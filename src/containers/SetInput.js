import React, { Component } from 'react';
import { InputText } from '../components';
import { browserHistory } from 'react-router';
import { autobind } from 'core-decorators';
import { Button, Card, CardBlock } from 'reactstrap';

export default class SetInput extends Component {
    @autobind
    handleClick() {
        browserHistory.push("/config");
    }
    render() {
        return (
            <Card>
                <CardBlock>
                    <InputText label="Enter set ID to test" type="text"/>
                    <Button onClick={this.handleClick}>Next</Button>
                </CardBlock>
            </Card>
        )
    }
}