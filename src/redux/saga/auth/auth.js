import { put } from "redux-saga/effects";
import { loginFail, loginStart, loginSuccess } from "../../action";

export function* loginSaga(action) {
  yield put(loginStart());
  const { email, password } = action.payload;
  console.log(email, password);
  try {
    const res = yield axios.post("http://192.168.29.60:000/login", {
      email,
      password,
    });
    if (res.data.status_code === 200) {
      loginSuccess(res.data);
    } else if (res.data) {
      loginFail(res.data);
    } else if (res.data.status_code === 500) {
      loginFail(res.data);
    }
  } catch (err) {
    loginFail(err);
  }
}
