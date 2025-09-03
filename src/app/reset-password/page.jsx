import ResetPassword from "./ResetPassword";

export default function ResetPasswordPage({ searchParams }) {
  return <ResetPassword token={searchParams?.token} />;
}
