import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);



const Body = () => {
const dispatch = useDispatch();

// because : use only first time rendering
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {    
        // login >> store his information into store
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        
      } else {
          // logout >> remove information from store
        dispatch(removeUser());
      }
    });
  }, []);




  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
