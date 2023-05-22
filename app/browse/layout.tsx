import { BrowseHeader } from "./components/BrowseHeader";
export default function BackpackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`min-h-screen w-full bg-purple-950 pb-12`}>
      <BrowseHeader />
      {children}
    </div>
  );
}
