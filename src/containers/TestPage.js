import React, { Component, PropTypes } from 'react';
import { Col, Card, CardBlock, Row } from 'reactstrap';
import { AutoAffix }from 'react-overlays';
import { QuestionList } from '../components';

const list = [
    {
        id: 1,
        question: 'Data Definition language (DDL) is used to...',
        answers: [
            'query database and modify the database',
            'connect to database and query database',
            'declare database schemas',
            'all of the others'
        ],
        rank: 2,
    },
    {
        id: 1,
        question: 'Data Definition language (DDL) is used to...',
        answers: [
            'query database and modify the database',
            'connect to database and query database',
            'declare database schemas',
            'all of the others'
        ],
        rank: 3,
    },
    {
        id: 1,
        question: 'Data Definition language (DDL) is used to...',
        answers: [
            'query database and modify the database gfkjfdkjfdkjfkdjfkjdkfjkdjfkdj',
            'connect to database and query database',
            'declare database schemas',
            'all of the others'
        ],
        rank: 1,
    }
]

export default class TestPage extends Component {
    render() {
        return(
            <Row>
                <Col md={{size: 3}}>
                    <AutoAffix viewportOffsetTop={15} container={this}>
                        <Card>
                            <CardBlock>
                                <h1>Time</h1>
                            </CardBlock>
                        </Card>
                    </AutoAffix>
                </Col>
                <QuestionList list={list} />
            </Row>
        )
    }
}