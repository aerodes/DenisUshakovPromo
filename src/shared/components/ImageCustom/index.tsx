import {
    ImageLoader,
    OnLoadingComplete,
    PlaceholderValue,
    StaticImport,
} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { CSSProperties } from "react";
const ImageCustom = ({
    ...args
}: {
    src: string | StaticImport;
    alt?: string;
    width?: number | `${number}`;
    height?: number | `${number}`;
    fill?: boolean;
    loader?: ImageLoader;
    quality?: number | `${number}`;
    priority?: boolean;
    loading?: "eager" | "lazy" | undefined;
    placeholder?: PlaceholderValue;
    blurDataURL?: string;
    unoptimized?: boolean;
    overrideSrc?: string;
    onLoadingComplete?: OnLoadingComplete;
    layout?: string;
    objectFit?: string;
    objectPosition?: string;
    lazyBoundary?: string;
    lazyRoot?: string;
    style?: CSSProperties;
}): React.ReactElement => {
    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
                {...args}
                src={args.src}
                alt={args.alt ? args.alt : " "}
                layout={args.layout ? args.layout : "fill"}
                objectFit={args.objectFit ? args.objectFit : "contain"}
            />
        </div>
    );
};
export default ImageCustom;
