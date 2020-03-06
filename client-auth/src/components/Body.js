import React, { useEffect, useState } from 'react'


import PropTypes from 'prop-types'

const Body = () => {
    const [user,setUser] = useState({})
    const [error,setError] = useState(null)
    const [authenticated,setAuthenticated] = useState(false)

    useEffect(() =>{
        fetch("http://localhost:4000/auth/login/success", {
            method: "GET",
            credentials: "include",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true
            }
          })
            .then(response => {
              if (response.status === 200) return response.json();
              throw new Error("failed to authenticate user");
            })
            .then(responseJson => {
            //   this.setState({
            //     authenticated: true,
            //     user: responseJson.user
            //   });
            setAuthenticated(true)
            setUser(responseJson.user)
            })
            .catch(error => {
            //   this.setState({
            //     authenticated: false,
            //     error: "Failed to authenticate user"
            //   });
            setAuthenticated(false)
            setError("Failed to authenticate user")
            });

    },[])

 const authenticate = {authenticated}
         return (
            <div>
               <div>
          {!authenticate ? (
            <h1>Welcome!</h1>
          ) : (
            <div>
              <h1>You have login succcessfully!</h1>
              <h2>Welcome {user.name}!</h2>
            </div>
          )}
        </div> 
            </div>
        )
    }

    

export default Body