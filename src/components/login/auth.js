// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import authReference from './auth.reference'
import {withRouter} from 'react-router-dom'

class SignInScreen extends React.Component {
    constructor(props) {
        super(props)

        this.handleSiugnInSuccess = this.handleSiugnInSuccess.bind(this)
        // Configure FirebaseUI.
        this.uiConfig = {
          // Popup signin flow rather than redirect flow.
          signInFlow: 'popup',
          // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
          //signInSuccessUrl: '/app/dashboard',

          callbacks: {
            signInSuccess: this.handleSiugnInSuccess
          },

          // We will display Google and Facebook as auth providers.
          signInOptions: [
            authReference.getFirebase().auth.GoogleAuthProvider.PROVIDER_ID
          ]
        };
    }

    handleSiugnInSuccess(user) {
      debugger
      let history = this.props.history
      debugger
    }

    render() {
      return (
        <div>
          <h1>My App</h1>
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={authReference.getFirebase().auth()}/>
        </div>
      );
  }
}

export default withRouter(SignInScreen)