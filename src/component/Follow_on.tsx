import {FaInstagram, FaLinkedin} from 'react-icons/fa6'
const FollowOn = () => {
    return (
        <div className="faded-text pt-2" >
            <span>Follow on:</span>
            <div className="flex gap-4 pt-3">
                <a href="https://www.linkedin.com/in/rahul-kumar-28714926b/">
                    <FaLinkedin size={20}/>
                </a>
                <a href="https://www.instagram.com/rahulkhg28/">
                    <FaInstagram size={20}/>
                </a>
               
            </div>
        </div>
    )
}
export default FollowOn ;