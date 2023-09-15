import { UserSideBar } from "@/components/dash/UserSideBar";
import { UserButton } from "@clerk/nextjs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1 border-r-2">
        <UserSideBar />
      </div>

      <div className="col-span-3">{children}</div>
    </div>
  );
}
