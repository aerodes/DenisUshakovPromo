// в этом файле описываем модули, расширение Window описано в index.tsx в корне проекта

declare module "*.scss" {
    const content: Record<string, string>;
    export default content;
}

declare module "*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}

declare module "*.pdf" {
    const content: string;
    export default content;
}
