import VerifyEmail from "./VerifyEmail";

export default function VerifyEmailPage({ searchParams }) {
  return <VerifyEmail token={searchParams?.token} />;
}
