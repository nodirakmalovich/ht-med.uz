import './ui/mainButton.scss'

export default function MainButton({text}){
    return (
        <button className='button'>
            {text}
        </button>
    )
}