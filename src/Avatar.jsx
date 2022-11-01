export default function Avatar(props) {
  return (
    <>
      <div className="main-profile-img">
        <img
          id="profile__img"
          src="/pic.jpeg"
          alt="profile picture"
          style={{ width: "88px", borderRadius: "275px" }}
        />
      </div>
    </>
  );
}
