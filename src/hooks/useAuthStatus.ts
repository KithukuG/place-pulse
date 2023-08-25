import React, { useEffect, useRef, useState } from "react";


const useAuthStatus = () => {
  const customRef = useRef(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //only when mounted
    if (customRef) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        }
        setLoading(false);
      });
    }
    return () => {
      customRef.current = false;
    };
  }, [customRef]);

  return {
    loading,
    loggedIn,
  };
};

export default useAuthStatus;
