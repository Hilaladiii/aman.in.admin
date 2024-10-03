import AppShell from "@/shared/container/Layouts/AppShell";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <AppShell>
        <div className="mt-6 px-[5rem]">{children}</div>
      </AppShell>
    </main>
  );
}
