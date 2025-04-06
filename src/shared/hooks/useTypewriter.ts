import { useState, useEffect } from "react";

interface UseTypewriterOptions {
  delay?: number;
  loop?: boolean;
  deleteDelay?: number;
  pauseTime?: number;
  start?: boolean; // 🔥 новый флаг запуска
}

export function useTypewriter(
  texts: string[] | string,
  options: UseTypewriterOptions = {}
): { text: string; isFinished: boolean } {
  const {
    delay = 100,
    loop = false,
    deleteDelay = 50,
    pauseTime = 1000,
    start = true, // по умолчанию запускается сразу
  } = options;

  const phrases = Array.isArray(texts) ? texts : [texts];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  // 🔄 сброс при изменении флага start (например, при входе в viewport)
  useEffect(() => {
    if (!start) {
      setText("");
      setIndex(0);
      setSubIndex(0);
      setDeleting(false);
      setIsFinished(false);
    }
  }, [start]);

  useEffect(() => {
    if (!start) return;

    const currentText = phrases[index];

    if (
      !loop &&
      !deleting &&
      subIndex === currentText.length &&
      index === phrases.length - 1
    ) {
      setIsFinished(true);
      return;
    }

    const timeout = setTimeout(() => {
      if (deleting) {
        setSubIndex((prev) => prev - 1);
        setText(currentText.slice(0, subIndex - 1));
      } else {
        setSubIndex((prev) => prev + 1);
        setText(currentText.slice(0, subIndex + 1));
      }

      if (!deleting && subIndex === currentText.length) {
        if (loop || index < phrases.length - 1) {
          setTimeout(() => setDeleting(true), pauseTime);
        }
      }

      if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => prev + 1);
      }
    }, deleting ? deleteDelay : delay);

    return () => clearTimeout(timeout);
  }, [start, subIndex, index, deleting]);

  return { text, isFinished };
}
