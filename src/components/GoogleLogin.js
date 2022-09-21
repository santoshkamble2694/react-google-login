import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';

const GoogleLogin = ({ loginSuccess }) => {

    const login = (res) => {
        const { credential } = res
        const userObj = jwtDecode(credential)
        //document.getElementById("google-login").hidden = true
        loginSuccess(userObj)
    }

    useEffect(() => {
        /*global google */
        if (window.google) {
            google.accounts.id.initialize({
                client_id: process.env.REACT_APP_CLIENT_ID,
                callback: login
            })

            google.accounts.id.renderButton(
                document.getElementById("google-login"),
                { theme: "outline", size: "large" }
            )
        }

        google.accounts.id.prompt()
    }, [])

    return (
        <div id='google-login' style={{
            maxWidth: "250px"
        }}></div>
    )
}

export default GoogleLogin