import { IIconProps } from "@/types";


const SgbIcon = (props: IIconProps) => {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
            <path
                d="M32 0.75C39.9976 0.75 47.9951 3.80097 54.0971 9.90291C60.199 16.0049 63.25 24.0024 63.25 32C63.25 39.9976 60.199 47.9951 54.0971 54.0971C47.9951 60.199 39.9976 63.25 32 63.25C24.0024 63.25 16.0049 60.199 9.90291 54.0971C3.80097 47.9951 0.75 39.9976 0.75 32C0.75 24.0024 3.80097 16.0049 9.90291 9.90291C16.0049 3.80097 24.0024 0.75 32 0.75Z"
                fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M32 1.5C24.1932 1.5 16.3889 4.4776 10.4332 10.4332C4.4776 16.3889 1.5 24.1932 1.5 32C1.5 39.8068 4.4776 47.6111 10.4332 53.5668C16.3889 59.5224 24.1932 62.5 32 62.5C39.8068 62.5 47.6111 59.5224 53.5668 53.5668C59.5224 47.6111 62.5 39.8068 62.5 32C62.5 24.1932 59.5224 16.3889 53.5668 10.4332C47.6111 4.4776 39.8068 1.5 32 1.5ZM9.37258 9.37258C15.6208 3.12434 23.8116 0 32 0C40.1884 0 48.3792 3.12434 54.6274 9.37258C60.8757 15.6208 64 23.8116 64 32C64 40.1884 60.8757 48.3792 54.6274 54.6274C48.3792 60.8757 40.1884 64 32 64C23.8116 64 15.6208 60.8757 9.37258 54.6274C3.12434 48.3792 0 40.1884 0 32C0 23.8116 3.12434 15.6208 9.37258 9.37258Z"
                  fill="#363B66"/>
            <mask id="mask0_10_28915" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="17" y="11" width="30"
                  height="42">
                <path
                    d="M26.7349 35.6695L24.9723 50.6369L17.04 53L26.7349 35.6695ZM27.5924 34.3512L37.2722 35.5997L40.4467 36.0129L26.3994 44.6624L27.5924 34.3512ZM35.6341 24.009L37.5998 28.2441L40.883 35.3577L37.7632 34.9596L27.9517 33.696L33.8788 26.2166L35.6341 24.009ZM44.884 25.0703L41.4287 34.8581L38.3795 28.2679L44.884 25.0703ZM20.1677 11L35.2288 23.3934L32.2955 27.0899L27.4211 33.228L20.1677 11ZM45.4147 25.6708L46.9591 33.0098L43.8235 30.1708L45.4147 25.6708Z"
                    fill="white"/>
            </mask>
            <g mask="url(#mask0_10_28915)">
                <mask id="mask1_10_28915" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="17" y="11"
                      width="30" height="42">
                    <path d="M46.959 11H17.04V53H46.959V11Z" fill="white"/>
                </mask>
                <g mask="url(#mask1_10_28915)">
                    <rect x="17.04" y="11" width="29.282" height="41.107" fill="url(#pattern0_10_28915)"/>
                </g>
            </g>
            <defs>
                <pattern id="pattern0_10_28915" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_10_28915" transform="scale(0.0238095 0.0169492)"/>
                </pattern>
                <image id="image0_10_28915" width="42" height="59"
                       xlinkHref="data:image/png;base64,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"/>
            </defs>
        </svg>
    );
};

export default SgbIcon;
