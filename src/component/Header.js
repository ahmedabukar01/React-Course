
const Header = ({magac}) => {
  return (
    <div>
        <h2>the name is {magac}</h2>
    </div>
  )
}

Header.defaultProps = {
    magac: "cali"
}

export default Header