import React from "react";

class UserProfile extends React.Component {
    render() {
        return (
            <div className="UserProfile">
                <div className="User">
                    <div className="name">John Doe</div>
                    <div className="image">
                        <img
                            src="https://www.logolynx.com/images/logolynx/97/97e88682fa82ed11f3bf96dcf8479635.png"
                            alt="profile"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;
