import React from "react";

const useSafeLinkOpener = () => {
    const openLink = React.useCallback((url, options = {}) => {
        const { target = "_blank", timeout = 3000, fallbackStrategy = "location" } = options;

        if (!url || typeof url !== "string") {
            console.error("Invalid URL");
            return;
        }

        const sanitizeUrl = (rawUrl) =>
            encodeURI(rawUrl)
                .replace(/javascript:/gi, "")
                .trim();

        const safeUrl = sanitizeUrl(url);
        let success = false;

        // Общая функция для открытия через window.open
        const tryWindowStrategy = (t) => {
            try {
                const newWindow = window.open("", t);
                if (!newWindow) return false;

                newWindow.opener = null;
                newWindow.location.href = safeUrl;

                // Расширенная проверка блокировки
                const checkInterval = setInterval(() => {
                    if (newWindow.closed) {
                        clearInterval(checkInterval);
                        return;
                    }
                    try {
                        if (!newWindow.location.href) throw new Error("Blocked");
                    } catch (e) {
                        newWindow.close();
                        clearInterval(checkInterval);
                        throw new Error("Popup blocked");
                    }
                }, 100);

                setTimeout(() => clearInterval(checkInterval), timeout);
                return true;
            } catch (e) {
                console.warn(`Window.open (${t}) failed:`, e.message);
                return false;
            }
        };

        // Основные стратегии в приоритетном порядке
        const strategies = [
            // 1. Приоритет: новая вкладка (принудительно)
            () => tryWindowStrategy("_blank"),

            // 2. Оригинальный target из параметров
            () => tryWindowStrategy(target),

            // 3. Fallback стратегии
            () => {
                if (fallbackStrategy === "location") {
                    window.location.href = safeUrl;
                    return true;
                }
                return false;
            },

            // 4. Резервный метод с формой
            () => {
                const form = document.createElement("form");
                form.action = safeUrl;
                form.target = "_blank";
                form.method = "get";
                form.style.display = "none";
                document.body.appendChild(form);
                form.submit();
                document.body.removeChild(form);
                return true;
            },
        ];

        // Выполняем стратегии до первой успешной
        for (const strategy of strategies) {
            if (strategy()) {
                success = true;
                break;
            }
        }

        if (!success) {
            console.error("All opening strategies failed");
            // Можно добавить дополнительный fallback:
            window.location.href = safeUrl;
        }
    }, []);

    return openLink;
};

export default useSafeLinkOpener;