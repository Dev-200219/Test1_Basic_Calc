let Symbols = (props) => {
    return(
        <div className="symbols">
            <button onClick = {(e) => {
            props.addSymbol(e.currentTarget.innerText);
          }}>+</button>
          
          <button onClick = {(e) => {
            props.addSymbol(e.currentTarget.innerText);
          }}>-</button>
          
          <button onClick = {(e) => {
             props.addSymbol(e.currentTarget.innerText);
          }}>*</button>
          
          <button onClick = {(e) => {
            props.addSymbol(e.currentTarget.innerText);
          }}>/</button>

        </div>
    )

}

export default Symbols;