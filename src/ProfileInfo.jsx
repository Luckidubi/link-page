import ProfileButton from "./ProfileButton";
import Avatar from "./Avatar";
import ProfileName from './ProfileName'
export default function ProfileInfo(props) {
  return (
    <>
      <div className="main-profile-section">
        <Avatar/>
        
        <ProfileName/>

       <ProfileButton/>
      </div>
    </>
  );
}
