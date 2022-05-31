
const Header = ({show,setShow}) => {
  
  return (
    <div className="header">
      <h1>SomTask</h1>
      <button onClick={()=>setShow(!show)}>Add Task</button>
    </div>
  )
}


export default Header