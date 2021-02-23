# See This 
[https://www.youtube.com/watch?v=PKwu15ldZ7k&feature=youtu.be]

## Do This
# Step 1
- In firebase create a project "Auth-Development" and disabled googla anaylytics
- Go to Authentication => Get Started => click "Sign-in method" => Enabled (Email/Password)

# Setp 2
- Create another project on firebase "Auth-Production" and disabled google analytics
- Go to Authentication => Get Started => click "Sign-in method" => Enabled (Email/Password)
- Scroll down => Go to "Authorised domains" and then remove localhost
- Then switch "Auth-Development" project

# Step 3
- Go to project overviews
- Click on button like this "</>" and register your app with name "auth-development"

# Step 4 
- Open your VS Code Editor create your react app
- First create a file ".env.local" on your root directory
- Write the following code in this file
------------------------------------------------------------------------------------
{
REACT_APP_FIREBASE_API_KEY = <YourFirebaseSnippet-ApiKey>
REACT_APP_FIREBASE_AUTH_DOMAIN = <YourFirebaseSnippet-AuthDomain>
REACT_APP_FIREBASE_DATABASE_URL = <YourFirebaseSnippet-DatabaseURL>
REACT_APP_FIREBASE_PROJECT_ID = <YourFirebaseSnippet-ProjectId>
REACT_APP_FIREBASE_STORAGE_BUCKET = <YourFirebaseSnippet-StorageBucket>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = <YourFirebaseSnippet-MessagingSenderId>
REACT_APP_FIREBASE_APP_ID = <YourFirebaseSnippet-AppId>
}
------------------------------------------------------------------------------------

# Step 5 
- Create a file "firebase.js" in your src folder
- Firslty run command on your terminal "npm i firebase"
- Write the following code in this file
------------------------------------------------------------------------------------
import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = app.auth();
export default app;
------------------------------------------------------------------------------------

# Step 6
- Create a contexts folder in your src folder
- Create a file "AuthContext.js" in this folder

# Step 7
- Create a components folder in your src folder
- Move "App.js" file in components foder
- Create "Signup.js" file in the same folder
- Open termianl and run command "npm i bootstrap react-bootstrap"
- Write the following code in "Signup.js" file
------------------------------------------------------------------------------------
import React, { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useAuth } from './../contexts/AuthContext';

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { Signup } = useAuth();

    function handleSubmit(e) {
        e.preventDefault();
        Signup(emailRef.current.value, passwordRef.current.value)
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button className="w-100" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Log In
            </div>
        </>
    )
}
------------------------------------------------------------------------------------

- Write the following code in "App.js" file
------------------------------------------------------------------------------------
import React from 'react';
import { Container } from 'react-bootstrap';
import Signup from './Signup';
import { AuthProvider } from './../contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
------------------------------------------------------------------------------------