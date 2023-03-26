import React, { useEffect } from "react";
import Login from "Page/Login";

import { pathObj } from "Routers";

export default function SignIn() {
  useEffect(() => {
    document.title = pathObj.signIn.title;
  }, []);
  return <Login hasLogin={false} />;
}
