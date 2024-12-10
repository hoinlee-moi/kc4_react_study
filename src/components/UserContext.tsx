import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
  useState,
} from "react";

export type UserType = { id: string; ps: string };

type ContextType = {
  user: UserType;
  setUserFn: (data: UserType) => void;
};

const UserContext = createContext<ContextType>({
  user: { id: "", ps: "" },
  setUserFn: () => {},
});

const reducer = (state: UserType, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return payload;
    case "DELETE":
      return { id: "", ps: "" };
    case "SIGNIN":
      break;
    default:
      break;
  }
  return state;
};

//유저 삭제, 유저 가입, 유저 로그인
export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, dispatch] = useReducer(reducer, { id: "", ps: "" });
  const setUserFn = (data: UserType) => {
    dispatch({ type: "LOGIN", payload: data });
  };
  const deleteUser = () => {
    dispatch({ type: "DELETE" });
  };

  return (
    <UserContext.Provider value={{ user, setUserFn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
