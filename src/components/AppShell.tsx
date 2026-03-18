import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  title?: string;
  children: ReactNode;
  active?: "home" | "play" | "contribute" | "profile";
};

function NavItem({ href, label, active }: { href: string; label: string; active?: boolean }) {
  return (
    <Link
      href={href}
      className={[
        "flex flex-col items-center justify-center gap-1 rounded-2xl px-3 py-2 text-xs",
        active ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:text-gray-900",
      ].join(" ")}
    >
      <span className="text-base leading-none">{label.slice(0, 1)}</span>
      <span className="leading-none">{label}</span>
    </Link>
  );
}

export default function AppShell({ title = "Semana Santa Zaragoza", children, active = "home" }: Props) {
  return (
    <div className="min-h-screen bg-[#F6F7F9]">
      <div className="mx-auto flex min-h-screen w-full max-w-[460px] flex-col gap-3 px-3 py-3">
        {/* Header */}
        <div className="flex h-14 items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 shadow-sm">
          <div className="font-semibold text-gray-900">{title}</div>
          <Link href="/profile" className="rounded-xl bg-gray-100 px-3 py-2 text-sm text-gray-700 hover:bg-gray-200">
            Perfil
          </Link>
        </div>

        {/* Content */}
        <main className="flex-1">{children}</main>

        {/* Bottom nav */}
        <nav className="sticky bottom-3 rounded-2xl border border-gray-200 bg-white px-2 py-2 shadow-sm">
          <div className="flex items-center justify-between">
            <NavItem href="/" label="Home" active={active === "home"} />
            <NavItem href="/play" label="Jugar" active={active === "play"} />
            <NavItem href="/contribute" label="Aportar" active={active === "contribute"} />
            <NavItem href="/profile" label="Perfil" active={active === "profile"} />
          </div>
        </nav>
      </div>
    </div>
  );
}
