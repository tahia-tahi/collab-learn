import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Assignments from "../Pages/Assignments";
import PendingAssignment from "../Pages/PendingAssignment";
import CreateAssignment from "../Pages/CreateAssignment";
import SubmittedAssignment from "../Pages/SubmittedAssignment";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([

    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/assignments',
                Component: Assignments
            },
            {
                path: '/pending',
                Component: PendingAssignment
            },
            {
                path: '/create',
                Component: CreateAssignment
            },
            {
                path: '/submitted',
                Component: SubmittedAssignment
            },
            {
                path: '/auth',
                Component: AuthLayout,
                children: [
                    {
                        path: '/auth/login',
                        Component: Login
                    },
                    {
                        path: '/auth/signup',
                        Component: SignUp
                    }
                ]
            },
            {
                path: '/*',
                Component: ErrorPage
            }
        ]
    }




])