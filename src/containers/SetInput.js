import React, { Component } from 'react';
import { InputText } from '../components';
import { browserHistory } from 'react-router';
import { autobind } from 'core-decorators';
import { connect } from '../utils/reduxAwait';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { getSet } from '../actions';
import { resetAwait } from '../actions/await';
import { Col, Button, Card, CardBlock, Row, FormText } from 'reactstrap';

function mapStateToProps(state, ownProps) {
    return {
        ahihi: state.quiz,
    }
}

@connect(mapStateToProps, dispatch => bindActionCreators({ getSet, resetAwait }, dispatch))
export default class SetInput extends Component {
    state = {
        setId: undefined,
    }
    @autobind
    handleClick() {
        browserHistory.push('/config');
    }
    @autobind
    handleCheck() {
        this.props.getSet(this.state.setId);
    }
    @autobind
    handleChange(evt) {
        const value = evt.target.value;
        this.setState({ setId: value });
    }
    render() {
        const { awaitStatuses, awaitErrors } = this.props;
        const loaded = awaitStatuses.loadedQuiz;
        return (
            <Row>
                <Col md={{size: 8, offset: 2}}>
                    <Card>
                        <CardBlock>
                            <InputText label="Nhập vào Set ID" type="text" onChange={this.handleChange}/>
                            { loaded !== "success" &&
                                <Button onClick={this.handleCheck} disabled={loaded === "pending"}>
                                    {loaded === "pending" ? "Đang kiểm tra ..." : "Kiểm tra"}
                                </Button>
                            }
                            { loaded === "failure" && <FormText>Không tìm thấy. Vui lòng kiểm tra lại set ID</FormText>}
                            { loaded === "success" && <Button onClick={this.handleClick}>Next</Button>}
                        </CardBlock>
                    </Card>
                </Col>
            </Row>
        )
    }
}