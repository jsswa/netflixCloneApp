import React from "react";

class Navigation extends React.Component {
    render() {
        return (
            <div id="navigation" className="Navigation">
                <nav>
                    <ul>
                        <li>Rechercher</li>
                        <li>Mes Favoris</li>
                        <li>Genres</li>
                        <li>Récent</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;
