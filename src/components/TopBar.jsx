import conradAvatar from "../assets/conrad-avatar.jpg"

function getGreeting() {

        const hour = new Date().getHours()

        if (hour < 12) return "Good morning"

        if (hour < 18) return "Good afternoon"

        return "Good evening"

}

function TopBar() {

    return (

        <header className="top-bar">

            <h2>{getGreeting()}, Conrad</h2>
            <img src={conradAvatar} alt="Conrad McAllister" className="avatar"/>

        </header>

    )

}

export default TopBar