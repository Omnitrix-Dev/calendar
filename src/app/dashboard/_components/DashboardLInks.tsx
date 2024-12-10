"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import {
  CalendarCheck,
  HomeIcon,
  Settings,
  Users2,
  ListTodo,
} from "lucide-react";

export const dashboardLinks = [
  {
    id: 0,
    name: "Event Types",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    id: 1,
    name: "Meetings",
    href: "/dashboard/meetings",
    icon: Users2,
  },
  // {
  //   id: 2,
  //   name: "Schedule",
  //   href: "/dashboard/schedule",
  //   icon: ListTodo,
  // },
  {
    id: 3,
    name: "Availablity",
    href: "/dashboard/availability",
    icon: CalendarCheck,
  },
  {
    id: 4,
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
] as const;

export function DasboardLinks() {
  const pathname = usePathname();
  return (
    <>
      {dashboardLinks.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={cn(
            pathname === link.href
              ? "bg-primary/10 text-primary"
              : "text-muted-foreground hover:text-foreground",
            "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
          )}
        >
          <link.icon className="h-4 w-4" />
          {link.name}
        </Link>
      ))}
    </>
  );
}
