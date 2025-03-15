"use client"

import { data } from "@/data/me";
import useHash from "@/shared/hooks/useHash";
import classNames from "classnames";
import Link from "next/link";

export default function Header() {
    const { hash, updateHash } = useHash({ defaultHash: "#about" });

    return (
        <div className="flex bg-background text-muted-foreground">
            {data.header.pages.map((page) => {
                const isActive = page.hash === hash;
                return (
                    <Link
                        key={page.hash}
                        href={page.hash}
                        onClick={() => updateHash(page.hash)}
                        className={classNames('relative px-4 py-2 text-sm font-medium flex items-center transition-all duration-150', {
                            "bg-muted text-foreground border-b-0": isActive,
                            "hover:bg-muted hover:text-foreground": !isActive
                        })}
                    >
                        {page.label}
                        {isActive && <div className="absolute top-0 left-0 w-full h-0.5 bg-highlight" />}
                        {isActive && <div className="absolute -bottom-0.5 left-0 w-full h-1 bg-muted" />}
                    </Link>
                );
            })}
        </div>
    );
}