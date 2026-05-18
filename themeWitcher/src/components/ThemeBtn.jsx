import useTheme from '../contexts/theme'

export default function ThemeBtn() {
  const { themeMode, darkTheme, lightTheme } = useTheme()

  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked
    if (darkModeStatus) {
      darkTheme()
    } else {
      lightTheme()
    }
  }

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={themeMode === "dark"}
        onChange={onChangeBtn}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600
        after:content-[''] after:absolute after:top-0.5 after:left-[2px]
        after:bg-white after:rounded-full after:h-5 after:w-5
        after:transition-all peer-checked:after:translate-x-full">
      </div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Toggle Theme
      </span>
    </label>
  )
}