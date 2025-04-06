import { useEffect, useRef } from "react";

type UseOnScreenEffectOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean; // по умолчанию true: срабатывает один раз
};

export function useOnScreenEffect(
  callback: () => void,
  ref: React.RefObject<Element | null>,
  options: UseOnScreenEffectOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px", once = true } = options;
  const hasFiredRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasFiredRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback();
          if (once) {
            hasFiredRef.current = true;
            observer.disconnect();
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, callback, threshold, rootMargin, once]);
}