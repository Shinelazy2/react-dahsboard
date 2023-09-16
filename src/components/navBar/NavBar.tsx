import './navbar.scss'

const NavBar = () => {
  return (
    <div className='navBar'>
      <div className="logo">
        <img src="logo.svg" alt=""/>
        <span>Admin</span>
        </div>      
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />  
        <img src="/app.svg" alt="" className="icon" />  
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" className="notification" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlBXr4ueqdF7tPJeSTMxztRqLDevNxEyaR14AxhHo&s" alt="" />
          <span>Jane</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />  
      </div>      
    </div>
  )
}

export default NavBar