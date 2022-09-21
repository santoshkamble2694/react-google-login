import { useState } from 'react';
import GoogleLogin from './components/GoogleLogin';
import './App.css';

function App() {
  const [user, setUser] = useState({
    name: "",
    email:"",
    avatar:"",
  })

  const loginSuccess = (res) => {
    setUser({
      name: `${res.given_name} ${res.family_name}`,
      email: res.email,
      avatar: res.picture
    })
  }

  const handleLogout = (e) => {
    e.preventDefault()
    setUser({})
  }

  return (
    <div className="App" style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      paddingTop:"100px"
    }}>

      <GoogleLogin loginSuccess={loginSuccess} />

      {user.email && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <img src={user.avatar} alt={user.name} style={{
            borderRadius:"50%"
          }} />
          <div>
            <button 
              onClick={handleLogout} 
              style={{
                "padding": "5px 10px",
                backgroundColor: "tomato",
                color: "#fff",
                borderRadius: "5px",
                border: "1px solid tomato",
                cursor:"pointer"
              }}
            >Logout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
