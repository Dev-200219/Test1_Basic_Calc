let Input = (props) => {
    return(
        <input type="text" value = {props.currValue} 
        
        onChange = {(e) => {
          props.updateEqn(e.currentTarget.value);
        }}
        ></input>
    )
}

export default Input;