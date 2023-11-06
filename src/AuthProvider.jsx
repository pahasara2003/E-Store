import { useContext, createContext, useState } from "react";

const AuthContext = createContext();
const SignContext = createContext();
const ConfirmContext = createContext();
const setconfirmContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useConfirm = () => {
  return useContext(ConfirmContext);
};

export const useSetConfirm = () => {
  return useContext(setconfirmContext);
};

export const useSign = () => {
  return useContext(SignContext);
};

const fun = () => {
  var name = "id" + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

const initial = () => {
  if (fun() == "null") {
    return "asd";
  } else {
    return fun();
  }
};

export const AuthProvider = ({ children }) => {
  const [authState, setauthState] = useState(fun());
  const [confirm, setconfirm] = useState(initial);
  console.log(fun());

  const setAuth = (value) => {
    document.cookie = `id=${value}; expires=Mon, 06 Nov 2023 22:00:00 UTC`;
    setauthState(value);
  };

  const Auth = () => {
    setauthState(fun());
    return authState;
  };

  return (
    <>
      <AuthContext.Provider value={Auth}>
        <SignContext.Provider value={setAuth}>
          <ConfirmContext.Provider value={confirm}>
            <setconfirmContext.Provider value={setconfirm}>
              {children}
            </setconfirmContext.Provider>
          </ConfirmContext.Provider>
        </SignContext.Provider>
      </AuthContext.Provider>
    </>
  );
};
