import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LANGUAGE_SUPPORT, LOGO } from "../utils/constatnts";
import { addgptMovies, toggleGptSearchView } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showLanguage = useSelector((store) => store.gpt.showGptSearch);
  const showButton = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    return signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTToggle = () => {
    dispatch(toggleGptSearchView());
    dispatch(addgptMovies({ movieNames: null, movieResults: null }));
  };

  const handleLanguage = (event) => {
    dispatch(changeLang(event.target.value));
  };

  // because : use only first time rendering
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // login >> store his information into store
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // logout >> remove information from store
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts >> onAuth Callback
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className=" w-full absolute p-4 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
        <img className="w-44 " alt="logo" src={LOGO} />
        {user && (
          <div className="p-4 flex gap-4 justify-center ">
            <h1 className="text-2xl text-white font-bold mt-2">
              Hellow, {user.displayName}...
            </h1>
            {showLanguage && (
              <select
                className="p-2 m-2 bg-gray-900 text-white "
                onClick={handleLanguage}
              >
                {LANGUAGE_SUPPORT.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              type="button"
              onClick={handleGPTToggle}
              className="text-white bg-green-500 hover:opacity-80  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-500"
            >
              {showButton ? "Home Page" : "GPT Search"}
            </button>
            <button
              type="button"
              onClick={handleSignOut}
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
