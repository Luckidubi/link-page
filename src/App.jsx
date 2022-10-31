function App() {
  return (
    <>
      <div className="main">
        <div className="main-section">
          <div className="main-container">
            <div className="main-content">
              <div className="main-profile-section">
                <div className="main-profile-img">
                  <img id="profile__img" />
                </div>
                <div className="main-profile-name">
                  <p id="twitter">luckidubi</p>
                </div>
                <div className="main-profile-name hidden">
                  <p id="slack">@Luckidubi</p>
                </div>
              </div>
              <div className="main-link-section">
                <div id="" className="main-link-row">
                  <a
                    id="twitter"
                    className="main-link-button"
                    href="https://twitter.com/luckidubi/"
                  >
                    Twitter Link
                  </a>
                </div>
                <div id="" className="main-link-row">
                  <a
                    id="btn__zuri"
                    className="main-link-button"
                    href="https://training.zuri.team/"
                  >
                    Zuri Team
                  </a>
                </div>
                <div id="" className="main-link-row">
                  <a
                    id="books"
                    title="This is where you find books about design and coding"
                    className="main-link-button"
                    href="https://books.zuri.team/"
                  >
                    Zuri Books
                  </a>
                </div>
                <div id="" className="main-link-row">
                  <a
                    id="book__python"
                    title="A python programming book with precise examples to take you from novice to pro"
                    className="main-link-button"
                    href="https://books.zuri.team/python-for-beginners?ref_id=Luckidubi"
                  >
                    Python Books
                  </a>
                </div>
                <div id="" className="main-link-row">
                  <a
                    id="pitch"
                    title="With a huge database of coders, we help you do a background check on any coder of choice"
                    className="main-link-button"
                    href="https://background.zuri.team/"
                  >
                    Background Check for Coders
                  </a>
                </div>
                <div id="" className="main-link-row">
                  <a
                    id="book__design"
                    title="Get a free book on design, offered by Zuri"
                    className="main-link-button"
                    href=" https://books.zuri.team/design-rules"
                  >
                    Zuri Team
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="main-footer">
            <div className="main-footer-container">
              <div className="main-footer-content">
                <div className="main-footer-social-icons">
                  {" slack"} {" github"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
