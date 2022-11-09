import * as React from "react"
import Svg, { Mask, Path, G, Circle } from "react-native-svg"

const SvgComponent = (props) => (<Svg
    width={120}
    height={120}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
>
    <Mask
        id="a"
        style={{
            maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={12}
        y={24}
        width={96}
        height={96}
    >
        <Path
            d="M20 120s-8 0-8-8 8-32 48-32 48 24 48 32-8 8-8 8H20Zm40-48a24 24 0 1 0 0-48 24 24 0 0 0 0 48Z"
            fill="#DADADA"
        />
    </Mask>
    <G mask="url(#a)">
        <Circle cx={60} cy={60} r={60} fill="#DADADA" />
    </G>
    <Circle cx={60} cy={60} r={59.5} stroke="#DADADA" />
</Svg>)

export default SvgComponent
