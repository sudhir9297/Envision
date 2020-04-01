import React from 'react'
import Payment from "../components/payment.component";

class ProfilePage extends React.Component {

    render(){
        return(
            <div>
                <Payment/>
                <a href="/api/logout">Log out</a>
            </div>
        )
    }
}

export default ProfilePage
