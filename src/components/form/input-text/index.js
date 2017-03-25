import React, { PureComponent, PropTypes } from 'react';
import { FormGroup, Label, Input }from 'reactstrap';

export default class InputText extends PureComponent {
    render() {
        const { label, type, placeholder, onChange } = this.props;
        return(
            <FormGroup>
                {label && <Label>{label}</Label>}
                <Input type={type} placeholder={`${placeholder ? placeholder : ''}`} onChange={onChange} />
            </FormGroup>
        )
    }
}

InputText.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
}