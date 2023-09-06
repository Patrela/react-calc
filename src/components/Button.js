import "../css/Button.css";
export default function Button(props){
  const isOperator= val =>{ return isNaN(val) && (val !=='.') && (val !== '=');};
  return (
    <button 
      className={`button-container ${isOperator(props.children)?'operator':' '}`.trim()}
      onClick={() => props.eventClic(props.children)}>
      {props.children}
    </button>
  );
}