import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (<Svg
    width= {24}
    height= {24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
>
    <Path
        d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM12 8v8M8 12h8"
        stroke="#4D4C4D"
        strokeWidth= {2}
        strokeLinecap="round"
        strokeLinejoin="round"
    />
</Svg>)

export default SvgComponent
