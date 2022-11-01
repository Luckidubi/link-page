import ProfileButton from "./ProfileButton";
import Avatar from "./Avatar";
import ProfileName from './ProfileName'
export default function ProfileInfo() {
  return (
    <>
      <div className="main-profile-section">
        <Avatar/>

        <ProfileName id="twitter" name="@luckidubi"/>
        <ProfileName className="hidden" id="slack" name="@Luckidubi"/>

       <ProfileButton/>
      </div>
    </>
  );
}
