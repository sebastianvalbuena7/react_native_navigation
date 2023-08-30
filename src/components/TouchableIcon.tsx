import { TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { colores } from "../theme/appTheme"
import { useContext } from 'react';
import { AuthContext } from "../context/AuthContext";

interface Props {
    nameIcon: string
}

export const TouchableIcon = ({ nameIcon }: Props) => {
    const { changeFavoriteIcon } = useContext(AuthContext)
    return (
        <TouchableOpacity onPress={() => changeFavoriteIcon(nameIcon)}>
            <Icon
                name={nameIcon}
                size={50}
                color={colores.primary} />
        </TouchableOpacity>
    )
}