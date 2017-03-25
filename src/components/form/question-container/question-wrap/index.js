import React, { PureComponent, PropTypes } from 'react';
import { CardTitle, CardBlock, CardText, ListGroup, ListGroupItem } from 'reactstrap';

export default class QuestionWrap extends PureComponent {
    renderAnswer(answers) {
        return (
            <ListGroup>
                {answers.map((answer, idx) => <ListGroupItem key={idx}>
                    <b>{`${String.fromCharCode(65+idx)}`}</b>. {answer}
                </ListGroupItem>)}
            </ListGroup>
        )
    }
    render() {
        const { id, question, answers, rank } = this.props;
        return (
            <CardBlock>
                <CardTitle>{`Câu ${id+1}`}</CardTitle>
                <CardText>{question}</CardText>
                {this.renderAnswer(answers)}
            </CardBlock>
        )
    }
}

QuestionWrap.propTypes = {
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    rank: PropTypes.number.isRequired,
}