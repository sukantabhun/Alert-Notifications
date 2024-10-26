import { GrFormClose } from 'react-icons/gr'
import './index.css'

const Notification = ({ name, children }) => {
  let text = ''

  switch (name) {
    case 'Success':
      text = 'You can access all the files in the folder'
      break
    case 'Error':
      text = 'Sorry, you are not authorized to have access to delete the file'
      break
    case 'Warning':
      text = 'Viewers of this file can see comments and suggestions'
      break
    case 'Info':
      text = 'Anyone on the internet can view these files'
      break
    default:
      text = 'Unknown notification'
  }

  return (
    <div className="notification-container">
      {children} 
      <div className="notification">
        <h1 className={name}>{name}</h1>
        <p className="alert-text">{text}</p>
      </div>
      <GrFormClose className="logo cross" />
    </div>
  )
}

export default Notification
