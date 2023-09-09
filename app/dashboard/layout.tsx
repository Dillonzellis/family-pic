import { UserButton } from "@clerk/nextjs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <div className="py-4 flex justify-between">
        <div className="text-2xl font-semibold">Family Pic</div>
        <UserButton />
      </div>
      <div>{children}</div>
    </div>
  );
}
