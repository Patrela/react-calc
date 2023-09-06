import "../css/ButtonClear.css"
const ButtonClear = (props) => (
  <button 
    className="button-clear"
    onClick={props.eventClear}
  >
    {props.children}
  </button>
);
export default ButtonClear;