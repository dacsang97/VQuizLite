import React, { PureComponent, PropTypes } from 'react';
import { FormGroup, Label, Input }from 'reactstrap';

export default class InputText extends PureComponent {
    render() {
        const { label, type, placeholder } = this.props;
        return(
            <FormGroup>
                {label && <Label>{label}</Label>}
                <Input type={type} placeholder={`${placeholder ? placeholder : ''}`} />
            </FormGroup>
        )
    }
}