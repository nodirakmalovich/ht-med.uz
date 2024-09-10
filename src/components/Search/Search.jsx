import './ui/search.scss'

export default function Search() {
    return (
        <div className="search">
            <form className="search_form">
                <input className="search_form_input" type="text" placeholder="search" />
                <button className="search_form_btn" type="submit">
                    <img src="/Search.svg" alt="Search icon" />
                </button>
            </form>
            
        </div>
    )
}