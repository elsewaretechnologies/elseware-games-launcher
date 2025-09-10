import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../../app/slices/authSlice";
import jwtDecode from "jwt-decode";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);

  if (token) {
    const decoded = jwtDecode(token);
    const { id, username, firstName, lastName, email, avatar, coverImg, roles } = decoded.userInfo;

    return {
      decoded,
      id,
      username,
      firstName,
      lastName,
      email,
      avatar,
      coverImg,
      roles,
    };
  }

  return {
    decoded: "",
    id: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
    coverImg: "",
    roles: [],
  };
};

export default useAuth;
