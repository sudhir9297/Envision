import React from 'react'
import {connect} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import {handelToken} from '../../redux/user/user.action'

class Payments extends React.Component {

    render(){
        return(
            <StripeCheckout
                amount={500}
                token={token=>this.props.currentUser(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                description= "5 credits for 5 dollar"
                name="Sudhir"
            />
            
        )
    }
}


const mapDispatchToProps=(dispatch)=>({
    currentUser:(item)=>dispatch(handelToken(item))
  });
  

export default connect(null,mapDispatchToProps)(Payments);
