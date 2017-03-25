import React, { Component } from 'react';
import { InputText } from '../components';
import { browserHistory } from 'react-router';
import { autobind } from 'core-decorators';
import { connect } from '../utils/reduxAwait';
import { bindActionCreators } from 'redux';
import { getSet } from '../actions';
import { Col, Button, Card, CardBlock, Row } from 'reactstrap';

function mapStateToProps(state, ownProps) {
    return {
        ahihi: state.quiz,
    }
}

@connect(mapStateToProps, dispatch => bindActionCreators({ getSet }, dispatch))
export default class SetInput extends Component {
    state = {
        setId: undefined,
    }
    @autobind
    handleClick() {
        this.props.getSet(this.state.setId);
        //browserHistory.push("/config");
    }
    @autobind
    handleChange(evt) {
        const value = evt.target.value;
        this.setState({ setId: value });
    }
    render() {
        return (
            <Row>
                <Col md={{size: 8, offset: 2}}>
                    <Card>
                        <CardBlock>
                            <InputText label="Enter set ID to test" type="text" onChange={this.handleChange}/>
                            <Button onClick={this.handleClick}>Next</Button>
                        </CardBlock>
                    </Card>
                </Col>
            </Row>
        )
    }
}