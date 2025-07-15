 import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, setActiveTab} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTab(tabId)
  }

  const activeTabClass = isActive ? 'active-tab' : ''

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-button ${activeTabClass}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
