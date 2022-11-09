import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const SvgComponent = (props) => (<Svg
    width= {16}
    height= {16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
>
    <G
        clipPath="url(#a)"
        stroke="#5E49FF"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <Path d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334ZM10 6l-4 4M6 6l4 4" />
    </G>
    <Defs>
        <ClipPath id="a">
            <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
    </Defs>
</Svg>)

export default SvgComponent
