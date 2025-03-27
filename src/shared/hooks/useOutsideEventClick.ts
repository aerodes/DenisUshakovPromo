/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useRef } from "react";

//@ts-ignore
export function useOutsideEventClick(onOutsideClick) {
    //@ts-ignore
    const ref = useRef<any>();

    useEffect(() => {
        //@ts-ignore
        const handleClick = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onOutsideClick();
            }
        };

        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [onOutsideClick]);

    return ref;
}
