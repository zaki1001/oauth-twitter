import React,{useState} from 'react'



 const Header = () => {
   const [authenticated,setAuthenticated] = useState(false)
    return(
        <>
   <nav>
    <div className="nav-wrapper grey darken-1">
      <a href="#" className="brand-logo ">V-Empower</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      {authenticated ? (
          <li onClick={_handleLogoutClick}><a href="">  Logout</a>  </li>
        ) : (
          <li onClick={_handleSignInClick} ><a href=""  >Login</a></li>
        )}
       
      </ul>
    </div>
  </nav>
  </>

)


 

}

const _handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    // Upon successful login, a cookie session will be stored in the client
    window.open("http://localhost:4000/auth/twitter", "_self");
  };

 const  _handleLogoutClick = () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage
    window.open("http://localhost:4000/auth/logout", "_self");
    this.props.handleNotAuthenticated();
  };

export default Header