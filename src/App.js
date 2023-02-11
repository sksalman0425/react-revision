import { useState } from "react";
import "./App.css";
import { Profile } from "./Profile";
// when default keyword is not written in Profile.js file then we have to write export before Profile component and user object.
//(no need to write export before user when you are using it in same proj/module).
//same way we write for {useState,useEffect} function bz they are not bydafault export function
//import Profile from './Profile';
// remember we can also write import Profile123 from './Profile'
//because we have written default keyword during exporting of Profile
// if we have not written default then we have to write excact name in {}.
import { ShoppingList } from "./ShoppingList";

function MyButton() {
  const [showProfile, setshowProfile] = useState(false);
  //in React any variable can take using useState() hook.
  const handleClick = () => {
    // alert("Button Clicked");
    setshowProfile(true);
  };
  const handleHideClick = () => {
    setshowProfile(false);
  };
  return (
    <>
      <button
        onClick={handleClick}
        style={{ border: "2px solid red" }}
        className="My-button" //here external css className written
      >
        Click here to showProfile
      </button>
      <button
        onClick={handleHideClick}
        style={{ border: "2px solid blue" }}
        className="My-button" //here external css className written
      >
        Click here to hide profile
      </button>
       {/* below given logic in JS which tell us that if first condition true then go to 2nd condition and render profile componant*/}
      {showProfile && <Profile />}
    </>
  );
}
function MyProjectBody() {
  return (
    <div>
      <Profile />
      <MyButton />
    </div>
  );
}
//below in return fun we write js code in {} i.e. ternary operator.
// for displaying MyProjectBody component makes isAdmin variable value true.
function App() {
  const isAdmin = false;
  return (
    <>
      <ShoppingList />
      {
        isAdmin ? (
          <MyProjectBody />
        ) : (
          <MyButton />
        ) /*JS code written here in {} i.e. conditional redering*/
      }
    </>
  );
}

export default App;
