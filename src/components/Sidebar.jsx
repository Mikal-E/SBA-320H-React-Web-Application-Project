import pulseLogo from "../assets/pulse-logo.png"

function Sidebar() {

    return (

        <aside className="sidebar">

            <div className="sidebar-header">

                <img src={pulseLogo} alt="Pulse logo" className="logo"/>
                <h1>Pulse<sup>by Brief.io</sup></h1>

            </div>

            <nav className="sidebar-nav">

                <ul>

                    <li className="future-feature">

                        <i class="fa-solid fa-lightbulb"></i> Future Feature

                    </li>

                    <li className="future-feature">

                        <i class="fa-solid fa-lightbulb"></i> Future Feature

                    </li>

                    <li className="future-feature">

                        <i class="fa-solid fa-lightbulb"></i> Future Feature

                    </li>

                    <li className="future-feature">

                        <i class="fa-solid fa-lightbulb"></i> Future Feature

                    </li>

                    <li className="future-feature">

                        <i class="fa-solid fa-lightbulb"></i> Future Feature

                    </li>

                    <li className="future-feature">

                        <i class="fa-solid fa-lightbulb"></i> Future Feature

                    </li>                                                                                                    

                </ul>

            </nav>

            <div className="sidebar-footer">

                <p><i class="fa-solid fa-gear"></i>Settings</p>
                <p><i class="fa-solid fa-right-from-bracket"></i>Log Out</p>

            </div>

        </aside>

    )

}

export default Sidebar