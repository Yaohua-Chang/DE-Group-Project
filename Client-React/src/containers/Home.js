import { AUTH_TOKEN, CURR_USER } from '../constants'

function Home() {

    const authToken = localStorage.getItem(AUTH_TOKEN)
    if (authToken) {
        const user = JSON.parse(localStorage.getItem(CURR_USER))
        console.log(user.role)
        if (user.role === "Admin") {
            window.location.href = "/admin";
        } else if (user.role === "Faculty") {
            window.location.href = "/faculty";
        } else if (user.role === "Student") {
            window.location.href = "/student";
        }
    } else {
        window.location.href = "/login";
    }

    return null
}


export default Home;