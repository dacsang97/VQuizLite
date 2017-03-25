import React, { PureComponent, PropTypes } from 'react';
import { Col, Card, CardBlock } from 'reactstrap';
import QuestionWrap from '../question-wrap';

export default class QuestionList extends PureComponent {
    renderQuestion(list) {
        return list.map((item, idx) => <QuestionWrap key={idx} id={idx} question={item.question} rank={item.rank} answers={item.answers}/>)
    }
    render() {
        const { list } = this.props;
        return (
            <Col md={{size: 9}}>
                <Card>
                    {this.renderQuestion(list)}
                </Card>
            </Col>
        )
    }
}

QuestionList.propTypes = {
    list: PropTypes.array.isRequired,
}
