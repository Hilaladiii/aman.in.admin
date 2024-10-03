"use client";

import { useRouter } from "next/navigation";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { useLogout } from "@/shared/usecase/useLogout";
import { useToken } from "@/shared/usecase/useToken";

export default function Navbar() {
  const router = useRouter();
  const token = useToken();
  const { logout } = useLogout();
  return (
    <header>
      <div className="flex flex-row items-center justify-between bg-white shadow-header">
        <div className="py-8 pl-20">
          <Logo />
        </div>
        <div className="flex items-center gap-4 py-8 pr-20">
          <Button
            variant="outline"
            className="border-secondary500 px-4 py-1 text-lg text-secondary500"
            onClick={token ? logout : () => router.push("/auth/login")}
          >
            {token ? "Keluar" : "Login"}
          </Button>
        </div>
      </div>
    </header>
  );
}
