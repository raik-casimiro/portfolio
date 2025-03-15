import Image from "next/image";
import { data } from "@/data/me";
import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="bg-background">
            <div className="px-4 py-1.5 flex justify-center">
                <Image
                    aria-hidden
                    src="/Logo.svg"
                    alt="Logo"
                    width={24}
                    height={24}
                />
            </div>
            <hr className="border-t border-gray-600" />
            <ul className="flex flex-col gap-2">
                {data.sidebar.links.map((link, index) => (
                    <li key={`sidebar_link_${link.name}_${index}`}>
                        <Link href={link.href} target="_blank" className="hover:bg-highlight transition duration-300 py-3 flex justify-center">
                            <link.icon size={24} />
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}