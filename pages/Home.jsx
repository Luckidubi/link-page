import ProfileFooter from "../src/components/ProfileFooter";
import ProfileInfo from "../src/components/ProfileInfo";
import ProfileLinks from "../src/components/ProfileLinks";

export default function Home() {
  return (
    <>
      <div className="main-section">
        <div className="main-container">
          <div className="main-content">
            <ProfileInfo />
            <ProfileLinks />
          </div>
        </div>
        <ProfileFooter />
      </div>
    </>
  );
}
