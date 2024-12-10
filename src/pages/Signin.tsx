import { useReducer } from "react";
import { InputForm } from "../components/InputForm";
import { useUser } from "../components/UserContext";

export const Signin = () => {
  const [isShow, setIsShow] = useReducer((prev) => !prev, false);
  const { setUserFn, user } = useUser();

  const formAction = (data: any) => {
    setUserFn({ id: data.ID, ps: data.Password });
    //로그인 로직
  };

  console.log("user>>>>", user);
  return (
    <section>
      <h1 className="text-7xl mb-10">Login</h1>
      {isShow && (
        <InputForm labels={["ID", "Password"]} formAction={formAction} />
      )}
      <button className="p-2 rounded bg-green-500" onClick={setIsShow}>
        로그인하기
      </button>
    </section>
  );
};
