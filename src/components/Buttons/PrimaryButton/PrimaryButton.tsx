import './PrimaryButton.css'

interface ButtonModel{
    buttonText: string
}

export const PrimaryButton = ({ buttonText }: ButtonModel) => {
    
    return(
        <button className='primaryButton'>{buttonText ? buttonText : 'This is a button'}</button>
    )
}
