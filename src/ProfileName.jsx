export default function ProfileName(props){

    return(
        <>
        <div className="main-profile-name">
          <p {...props} id={props.id}>{props.name}</p>
        </div>

        </>
    )
}