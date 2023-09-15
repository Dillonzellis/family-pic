import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

const links = [
  {
    label: "My Profile",
    href: "/dashboard",
  },
  {
    label: "Upload",
    href: "/dashboard/uploader",
  },
  {
    label: "All Pictures",
    href: "/dashboard/all-pics",
  },
];

export const UserSideBar = async () => {
  const user = await currentUser();

  return (
    <div>
      <UserButton />
      <div>Hello {user?.firstName}</div>
      <ul>
        {links.map((link) => (
          <li>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
