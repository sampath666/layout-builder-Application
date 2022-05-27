import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="b-c1">
          <div className="b-c4">
            {showLeftNavbar && (
              <div className="b-c3">
                <h1 className="b-h1">Left Navbar Menu</h1>
                <ul>
                  <li>item1</li>
                  <li>item2</li>
                  <li>item3</li>
                  <li>item4</li>
                </ul>
              </div>
            )}
            {showContent && (
              <div className="b-c2">
                <h1 className="b-h1">Content</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            )}
          </div>
          {showRightNavbar && (
            <div className="b-c3">
              <h1 className="b-h1">Right Navbar</h1>
              <div className="b-c5">
                <div className="b-box">
                  <p>Ad 1</p>
                </div>
                <div className="b-box">
                  <p>Ad 2</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
