import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

export default function useHash({defaultHash = null}: {defaultHash: string|null}) {

    const [hash, setHash] = useState(defaultHash);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {

        const updateHashState = () => setHash(window.location.hash);

        updateHashState();

        window.addEventListener("hashchange", updateHashState);

        return () => {
            window.removeEventListener("hashchange", updateHashState);
        };

    }, []);

    const updateHash = useCallback((newHash: string) => {

        const formattedHash = newHash.startsWith("#") ? newHash : `#${newHash}`;
        
        router.push(`${pathname}${formattedHash}`, { scroll: false });
        setHash(formattedHash);

    }, [router, pathname]);

    return { hash, updateHash };
}
