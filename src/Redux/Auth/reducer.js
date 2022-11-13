 
import { getLocalData, saveData } from "../../Utils/localStorageData";
import * as types from "./actionType";
const initialState = {
  cred: getLocalData("login_detail") || [],
  isAuth: getLocalData("isLogged") || false,
};
export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      if (checkSingin(oldState.cred, payload)) {
        saveData("isLogged", true);
        alert("Login Successfull!");

        return {
          ...oldState,
          isAuth: true,
        };
      } else {
        saveData("isLogged", false);
        alert("Check email and Password!!");
        return {
          ...oldState,
        };
      }

    case types.SIGNUP_REQUEST:
      if (checkEmails(payload, oldState.cred)) {
        let data = [...oldState.cred];
        data.push(payload);
        saveData("login_detail", data);
        return {
          ...oldState,
          cred: data,
        };
      } else {
        alert("User already present");
        return {
          ...oldState,
        };
      }

    default:
      return oldState;
  }
};
function checkEmails(email, cred) {
  let checked = cred.filter((el) => el.email === email.email);
  if (checked.length > 0) return false;
  else return true;
}
function checkSingin(cred, payload) {
    // if(payload.email ==="admin@admin.com" && payload.password ==="admin"){
    //     return <Navigate to="/admin"/>
    // }
  let checked = cred.filter((el) => el.email === payload.email);
  let pass = cred.filter((el) => el.password === payload.password);
console.log(checked, pass)
  if (checked.length > 0 && pass.length > 0) {
    return true
  } else {
    return false
  }
}
