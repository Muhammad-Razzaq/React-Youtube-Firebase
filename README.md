# See This 
[https://www.youtube.com/watch?v=PKwu15ldZ7k&feature=youtu.be]

## Follow the following instructions:
### Step 1
- In firebase create a project "Auth-Development" and disabled googla anaylytics
- Go to Authentication => Get Started => click "Sign-in method" => Enabled (Email/Password)

### Setp 2
- Create another project on firebase "Auth-Production" and disabled google analytics
- Go to Authentication => Get Started => click "Sign-in method" => Enabled (Email/Password)
- Scroll down => Go to "Authorised domains" and then remove localhost
- Then switch "Auth-Development" project

### Step 3
- Go to project overviews
- Click on button like this "</>" and register your app with name "auth-development"

### Step 4 
- Open your VS Code Editor create your react app
- First create a file ".env.local" on your root directory
- Write the following code in this file
```
REACT_APP_FIREBASE_API_KEY = <YourFirebaseSnippet-ApiKey>
REACT_APP_FIREBASE_AUTH_DOMAIN = <YourFirebaseSnippet-AuthDomain>
REACT_APP_FIREBASE_DATABASE_URL = <YourFirebaseSnippet-DatabaseURL>
REACT_APP_FIREBASE_PROJECT_ID = <YourFirebaseSnippet-ProjectId>
REACT_APP_FIREBASE_STORAGE_BUCKET = <YourFirebaseSnippet-StorageBucket>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = <YourFirebaseSnippet-MessagingSenderId>
REACT_APP_FIREBASE_APP_ID = <YourFirebaseSnippet-AppId>
```

### Step 5 
- Create a file "firebase.js" in your src folder
- Firslty run command on your terminal "npm i firebase"
- Write the following code in this file
```
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
```

### Step 6
- Create a contexts folder in your src folder
- Create a file "AuthContext.js" in this folder

### Step 7
- Create a components folder in your src folder
- Move "App.js" file in components foder
- Create "Signup.js", "Login.js", "ForgotPassword.js", "Dashboard.js", "UpdateProfile.js" and "PrivateRoute.js" files in the same folder
- Open termianl and run command "npm i bootstrap react-bootstrap"
- Write the following code in "Signup.js" file
```
import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from './../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Password donot matched");
        }

        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError("Failed to create an account");
        }
        setLoading(false);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
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
                        <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    )
}
```

- Write the following code in "Login.js" file
```
import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from './../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("./");
        } catch {
            setError("Failed to log in");
        }
        setLoading(false);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot Password</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}
```
- Write the following code in "ForgotPassword.js" file
```
import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from './../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState();
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setMessage("");
            setError("");
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage("Check your inbox for further instructions")
        } catch {
            setError("Failed to reset password");
        }
        setLoading(false);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Password Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Reset Password</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/login">Login</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}
```
- Write the following code in "Dashboard.js" file
```
import React, { useState } from 'react';
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from './../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Dashboard() {

    const [error, setError] = useState();
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        setError("");

        try {
            await logout();
            history.push("/login");
        } catch {
            setError("Failed to log out");
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email : </strong> {currentUser.email}
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}
```
- Write the following code in "UpdateProfile.js" file
```
import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from './../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updateEmail, updatePassword } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Password donot matched");
        }

        const promises = []
        setLoading(true)
        setError("")

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises)
            .then(() => {
                history.push("/")
            })
            .catch(() => {
                setError("Failed to update account")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Update Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} defaultValue={currentUser.email} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder="Leave blank to keep the same" />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same" />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Update</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/">Cancel</Link>
            </div>
        </>
    )
}
```
- Write the following code in "PrivateRoute.js" file
```
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './../contexts/AuthContext';

export default function PrivateRoute({ component: Component, ...rest }) {

    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> :
                    <Redirect to="/login" />
            }}
        >
        </Route>
    )
}
```
- Write the following code in "App.js" file
```
import React from 'react';
import { Container } from 'react-bootstrap';
import Signup from './Signup';
import { AuthProvider } from './../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';

function App() {
  return (
    <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
```

### Step 7
- Write the following code in your "index.js" file
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```