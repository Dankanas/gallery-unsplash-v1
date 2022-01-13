import { IconName } from "./IconName"

export interface IconProps {
    name: IconName
    color?: IconColor
}

type IconColor = "light" | "dark"