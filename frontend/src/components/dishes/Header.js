import Button from './Button'


const Header = ({ onAdd, showAdd }) => {

    return (
        <header className="header">
            <h1>Dishes</h1>
            <Button
                text={showAdd ? "Close" : "Add"}
                onClick={onAdd}></Button>
        </header>
    )
}

export default Header