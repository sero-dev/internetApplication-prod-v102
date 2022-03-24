import React, { FunctionComponent } from 'react'

import './PrimaryButton.css'

type buttonProps = {
    buttonText: string;
}

export const PrimaryButton: FunctionComponent<buttonProps> = ({buttonText}) => {
    
    return(
        <input type='button' className='primaryButton'>{buttonText}</input>
    )
}
