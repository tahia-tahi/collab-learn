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
import Loading from "../Components/Loading";
import PrivateLayout from "../Provider/PrivateLayout";
import AssignmentDetails from "../Pages/AssignmentDetails";
import UpdateAssignment from "../Pages/UpdateAssignment";

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
                Component: Assignments,
                loader: () => fetch('https://collab-learn-server-pearl.vercel.app/assignments'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/details/:id',
                element: <PrivateLayout>
                    <AssignmentDetails></AssignmentDetails>
                </PrivateLayout>,
                loader: ({ params }) => fetch(`https://collab-learn-server-pearl.vercel.app/assignments/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/pending',
                element: <PrivateLayout>
                    <PendingAssignment></PendingAssignment>
                </PrivateLayout>
            },
            {
                path: '/create',
                element: <PrivateLayout>
                    <CreateAssignment></CreateAssignment>
                </PrivateLayout>
            },
            {
                path: '/submitted',
                element: <PrivateLayout>
                    <SubmittedAssignment></SubmittedAssignment>
                </PrivateLayout>
            },

            {
                path: "/update/:id",
                element: <PrivateLayout>
                    <UpdateAssignment />
                </PrivateLayout>,
                loader: ({ params }) =>
                    fetch(`https://collab-learn-server-pearl.vercel.app/assignments/${params.id}`)
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