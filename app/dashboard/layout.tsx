import { UserButton } from "@clerk/nextjs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <UserButton />
      </div>
      <div>{children}</div>
    </div>
  );
}
