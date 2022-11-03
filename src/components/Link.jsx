export default function Link(props) {
  return (
    <>
      <div className="main-link-row">
        <a
          {...props}
          className="main-link-button"
          id={props.id}
          href={props.url}
        >
          {props.children}
        </a>
      </div>
    </>
  );
}
