import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News/News";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndConditions from "../../Pages/Others/TermsAndContions/TermsAndConditions";
import Profile from "../../Pages/Others/Profile/Profile";


const { createBrowserRouter } = require("react-router-dom");


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [


        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch("https://dragon-news-server-chi-five.vercel.app/news")
        },
        {
            path: "/category/:id",
            element: <Category></Category>,
            loader: ({params}) => fetch(`https://dragon-news-server-chi-five.vercel.app/category/${params.id}`)

        },
        {
            path: "/news/:id",
            element: <PrivateRoute><News></News></PrivateRoute>,
            loader: ({params})=> fetch(`https://dragon-news-server-chi-five.vercel.app/news/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
      },
      {
          path:'/register',
          element: <Register></Register>
      },
      {
        path: '/terms',
        element: <TermsAndConditions></TermsAndConditions>
    },
    {
      path: '/profile',
      element: <PrivateRoute><Profile></Profile></PrivateRoute>
  }
        
    ],
  },
]);
