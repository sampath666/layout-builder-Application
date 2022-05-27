import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      return (
        <div className="d1">
          <div className="text">
            <h1 className="h-h1">Layout</h1>
            <div className="h-in1">
              <input
                type="checkbox"
                id="Context"
                className="h-in2"
                onClick={() => onToggleShowContent()}
              />
              <label htmlFor="Context" className="h-p1">
                Content
              </label>
            </div>
            <div className="h-in1">
              <input
                type="checkbox"
                id="Contextl"
                className="h-in2"
                onClick={() => onToggleShowLeftNavbar()}
              />
              <label htmlFor="Contextl" className="h-p1">
                Left Navbar
              </label>
            </div>
            <div className="h-in1">
              <input
                type="checkbox"
                id="Contextr"
                className="h-in2"
                onClick={() => onToggleShowRightNavbar()}
              />
              <label htmlFor="Contextr" className="h-p1">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
