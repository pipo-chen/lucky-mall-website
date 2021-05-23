import axios from 'axios'
import * as constants from './constants'

export const handleMouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const handleMouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});

export const handleSelectNavItem = (index) => ({
    type: constants.SELECT_NAV,
    index : index
})

