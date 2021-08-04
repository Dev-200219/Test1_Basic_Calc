let Keypad = (props) => {
    return (
        <div className="keypad-btn">

            {props.keypadArr.map((ele) => {
                return (
                    <button onClick={(e) => {
                        props.addSymbol(e.currentTarget.innerText);
                    }}>{ele}</button>
                )
            })}

            <button onClick={() => {
                props.getResult();
            }}>=</button>


            <button onClick={() => {
                props.updateEqn("");
            }}>Clear</button>

        </div>
    )
}

export default Keypad;