import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cn from 'classnames'


type Props = {
    preview?: boolean
}

const Alert = ({ preview }: Props) => {
    return (
            <div className="items-right text-right bg-gray-300">
                <a href="/refer-a-friend" className="text-right pr-4 text-green-950 ">
                                            Earn: Refer a friend          
                </a>
            </div>
    )
}

export default Alert
