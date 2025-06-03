import React from 'react';
import SignUp from '../Pages/SignUp';
import Login from '../Pages/Login';

const AuthLayout = () => {
    return (
        <div>
            <Login></Login>
            <SignUp></SignUp>

        </div>
    );
};

export default AuthLayout;