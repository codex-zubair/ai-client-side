import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";


export const routes = createBrowserRouter([
    {
        path:'/' , element: <Main></Main>, children: [
            {
                path:'/' , element: <Home></Home>
            },
            {
                path:'/login' , element: <Login></Login>
            },
            {
                path:'/register' , element: <Register></Register> 
            },
            {
                path:'/blog' , element: <Blog></Blog>
            },
          
            {
                path:'/checkout/:id' , element: <ProtectedRoutes><Checkout></Checkout></ProtectedRoutes>,

            },
            
            {
                path:'/courses' , element: <Courses></Courses>,
                loader: ()=> {
                    return fetch('https://artificial-intelligenc-course-server-side.vercel.app/categories');
                }
            },
            {
                path:'/details/:id' , element: <CourseDetails></CourseDetails>,
                loader: async ({params})=> {
                    return fetch(`https://artificial-intelligenc-course-server-side.vercel.app/categories/${params.id}`);
                }
            },


            {
                path:'*' , element: <ErrorPage></ErrorPage>
            }
        ]
    }
])