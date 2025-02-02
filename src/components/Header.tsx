import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import Logo from "@/components/Logo";

export default async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <Bounded as="footer" className="">
      <div
        className="h-screen w-full"
        style={{
          backgroundImage: `url(${settings.data.og_image.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex gap-4 items-center justify-between sm:flex-row flex-col">
          <Link href="/">
            <div className="p-6">
              <Logo />
            </div>
          </Link>
          <nav>
            <ul className="flex m-6">
              {settings.data.navigation.map(({ link, label }) => (
                <li
                  className="bg-stone-400 m-6 p-0.5 text-sm rounded-xl text-white hover:bg-stone-500 "
                  key={label}
                >
                  <PrismicNextLink field={link} className="p-3 ">
                    {label}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </Bounded>
  );
}
