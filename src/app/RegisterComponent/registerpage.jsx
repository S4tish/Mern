// pages/RegisterPage.js
import { useRouter } from "next/router";
import Register from "../Register/page";

const RegisterPage = () => {
  const router = useRouter();
  return <Register router={router} />;
};

export default RegisterPage;
