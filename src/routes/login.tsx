import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [{ title: "Contact | ICAP Transport Inc." }],
  }),
});

function LoginPage() {
  return <Navigate to="/contact" />;
}
