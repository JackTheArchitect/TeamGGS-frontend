
export default function Members(props){
    return(
        <>
        <div className="mbrsContainer">
            <div className="mbr">
                <a href={props.mbrUrl}>
                    <img src={props.mbrProfile}></img>{props.mbrName}
                </a>
            </div>
        </div>
        </>
    )
  }