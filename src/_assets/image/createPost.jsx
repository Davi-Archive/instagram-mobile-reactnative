import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
    <Svg
        width={80}
        height={80}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M63.333 10H16.667A6.667 6.667 0 0 0 10 16.667v46.666A6.667 6.667 0 0 0 16.667 70h46.666A6.667 6.667 0 0 0 70 63.333V16.667A6.667 6.667 0 0 0 63.333 10Z"
            stroke="#25CBD3"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M28.333 33.333a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM70 50 53.334 33.333 16.667 70"
            stroke="#25CBD3"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export default SvgComponent
