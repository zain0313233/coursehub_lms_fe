import ResetPassword from "./ResetPassword";

export default function ResetPasswordPage({ searchParams }: { searchParams: { token?: string } }) {
  return <ResetPassword token={searchParams?.token} />;
}
