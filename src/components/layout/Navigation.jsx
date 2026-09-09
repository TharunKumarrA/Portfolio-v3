"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/site";
export function Navigation() {
 const pathname = usePathname();
 return <nav aria-label="Main navigation"><ul className="nav-list">{navigation.map(item => {
  const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
  return <li key={item.href}><Link href={item.href} aria-current={active ? "page" : undefined}>{item.label}</Link></li>;
 })}</ul></nav>;
}
