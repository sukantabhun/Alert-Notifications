import Notification from '../Notification'
import {GrFormClose} from 'react-icons/gr'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import './index.css'

const list1 = ['Success', 'Error', 'Warning', 'Info']

const getIcon = name => {
  switch (name) {
    case 'Success':
      return <AiFillCheckCircle color="#2dca73" className="logo image" />
    case 'Error':
      return <RiErrorWarningFill color="#ff0b37" className="logo image" />
    case 'Warning':
      return <MdWarning color="#ffb800" className="logo image" />
    case 'Info':
      return <MdInfo color="#0f81e0" className="logo image" />
    default:
      return null
  }
}

const AlertNotifications = () => (
  <div className="main-container">
    <h1>Alert Notifications</h1>
    <div>
      {list1.map(name => (
        <Notification key={name} name={name}>
          {getIcon(name)}
        </Notification>
      ))}
    </div>
  </div>
)

export default AlertNotifications
