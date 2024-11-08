import { useContext } from'react';
import { ThemeContext } from '../contexts/ThemeContext'

export default function useThemeContext() {
    let context = useContext(ThemeContext);

    if(context === undefined) {
        throw new Error('useThemeContext must be used within a ThemeContextProvider')
    }

    return context;
}