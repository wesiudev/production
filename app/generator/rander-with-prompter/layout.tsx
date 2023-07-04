"use client";
export const metadata = {
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.png",
  },
  title: `Decocanva - Generate With Prompter - Free Image Generator`,
  themeColor: "black",
  authors: [
    { name: "wesiu.dev" },
    { name: "OpenAI Image Generator API" },
    { name: "React" },
    { name: "decocanva.com" },
  ],
};
export default function RenderWithPrompterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`w-full min-h-full from-zinc-900 to-purple-900 bg-gradient-to-br`}
    >
      {children}
    </div>
  );
}
