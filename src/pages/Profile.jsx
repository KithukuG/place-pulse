import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

const Profile = () => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return (
    <div>{user ? <h1>{user.displayName}</h1> : <h1>Not logged in</h1>}</div>
  );
};

export default Profile;
