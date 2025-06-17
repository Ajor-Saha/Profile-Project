import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

const ThemeProvider = ({children}) => {
    const { theme } = useSelector((state) => state.theme);
  return (
    <div>
      <div className={theme}>
      <div className='bg-white text-gray-900 dark:text-gray-200   min-h-screen'>
        {children}
      </div>
    </div>
    </div>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ThemeProvider