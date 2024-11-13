import React, { useContext } from "react";
import AuthProvider, { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>User Profile</h1>
      <h3>{user.email}</h3>
    </div>
  );
};

export default Profile;
