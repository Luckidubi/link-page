import MainFooter from "./MainFooter";
import ProfileInfo from "./ProfileInfo";
import ProfileLinks from "./ProfileLinks";
import ProfileFooter from "./ProfileFooter";

function App() {
  return (
    <>
      <div className="main">
        <div className="main-section">
          <div className="main-container">
            <div className="main-content">
              <ProfileInfo />
              <ProfileLinks />
            </div>
          </div>
          <ProfileFooter />
        </div>
        <MainFooter/>
      </div>
    </>
  );
}

export default App;
