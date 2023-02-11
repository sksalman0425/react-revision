const user = {
  name: "Princess Diana",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};
//Username componant created and called in profile function.
function UserName() {
  return (
    /* JS code/variable name in {} bracket*/
    <h1>Name :{user.name} </h1>
  );
}
//UserImage componant and called in profile function.
function UserImage() {
  return (
    <img
      src={user.imageUrl} // JS code /variable name in {} bracket
      style={{ width: user.imageSize, height: user.imageSize }} // inline css in {{}} bracket
      alt={{}}
    />
  );
}
//below we use variable values in <h1></h1> <img/> tags
export function Profile() {
  return (
    <>
      <UserName />
      <UserImage />
    </>
  );
}

//export default Profile;
