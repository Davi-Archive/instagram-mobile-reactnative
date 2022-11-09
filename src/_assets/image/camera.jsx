import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

const SvgComponent = (props) => (
    <Svg
        width={40}
        height={40}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={20} cy={20} r={20} fill="#5E49FF" />
        <Path
            d="M30.5 26a1.5 1.5 0 0 1-1.5 1.5H11A1.5 1.5 0 0 1 9.5 26v-9a1.5 1.5 0 0 1 1.5-1.5h1.758a4.5 4.5 0 0 0 3.18-1.319l1.245-1.241a1.5 1.5 0 0 1 1.058-.44h3.516a1.5 1.5 0 0 1 1.06.44l1.242 1.242a4.499 4.499 0 0 0 3.183 1.318H29a1.5 1.5 0 0 1 1.5 1.5v9ZM11 14a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-1.758a3 3 0 0 1-2.12-.879l-1.243-1.242A3 3 0 0 0 21.76 11h-3.517a3 3 0 0 0-2.12.879l-1.243 1.242a3 3 0 0 1-2.12.879H11Z"
            fill="#fff"
        />
        <Path
            d="M20 24.5a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5Zm0 1.5a5.25 5.25 0 1 0 0-10.5A5.25 5.25 0 0 0 20 26Zm-7.5-8.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            fill="#fff"
        />
    </Svg>
)

export default SvgComponent