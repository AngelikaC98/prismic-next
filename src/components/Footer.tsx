import { createClient } from "@/prismicio";
import Bounded from "./Bounded";
import Link from "next/link";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <Bounded as="footer">
      <div className="flex flex-col  items-center p-6 ">
        <Link href="/"></Link>

        <p className="text-xs ">
          ©{new Date().getFullYear()} {settings.data.site_title}
        </p>
      </div>
    </Bounded>
  );
}
