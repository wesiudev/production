"use client";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`w-full min-h-full from-zinc-900 to-purple-950 bg-gradient-to-br`}
    >
      {children}
    </div>
  );
}
