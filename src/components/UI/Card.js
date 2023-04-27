import './Card.css'

const Card = function (props) { 
  const classes = 'card ' + props.className
  return (
    <div className={classes}>{props.children}</div>
  )
};
// You do not set children prop. It is a reserved name. It is always content between opening and closing tag 
// Have to add classes if you want css to apply
export default Card;