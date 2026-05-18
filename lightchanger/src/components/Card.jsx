import { useTheme } from "../contexts/theme"
const Card = () => {

    const { themeMode, darkThemeMode, lightThemeMode } = useTheme()

    const clickHandler = () => {
        console.log('clicked');

        if (themeMode === "light") {
            darkThemeMode()
        } else {
            lightThemeMode()
        }
    }

    return (
        <div className="
            max-w-sm
            p-6
            rounded-2xl
            shadow-lg
            bg-white dark:bg-gray-800
            text-black dark:text-white
            transition-all duration-300
        ">
            <h2 className="text-2xl font-bold mb-2">Simple Card</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
                This is a simple React card component with a theme toggle button.
            </p>

            <button
                onClick={clickHandler}
                className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
                {themeMode === "light" ? "Switch to Dark" : "Switch to Light"}
            </button>
        </div>
    )
}

export default Card
//         <div className="
// max-w-sm
// p-6
// rounded-2xl
// shadow-lg
// bg-white dark:bg-gray-800
// text-black dark:text-white
// transition-all duration-300
// ">
//             <h2 className="text-2xl font-bold mb-2">Simple Card</h2>

//             <p className="text-gray-600 mb-4">
//                 This is a simple React card component with a button.
//             </p>

//             <button
//                 onClick={clickHandler}
//                 className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
//                 Click Me
//             </button>
//         </div>