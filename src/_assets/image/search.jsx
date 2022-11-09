import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (<Svg
    width= {22}
    height= {20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
>
    <Path
        d="M10.232 15.833c3.94 0 7.135-2.984 7.135-6.666 0-3.682-3.194-6.667-7.135-6.667-3.94 0-7.135 2.985-7.135 6.667s3.195 6.666 7.135 6.666ZM19.15 17.5l-3.879-3.625"
        stroke="#5E49FF"
        strokeWidth= {2}
        strokeLinecap="round"
        strokeLinejoin="round"
    />
</Svg>)

export default SvgComponent
