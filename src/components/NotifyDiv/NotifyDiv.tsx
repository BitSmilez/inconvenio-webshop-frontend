import "./NotifyDiv.css";
const NotifyDiv = ({notifyMessage}: {notifyMessage: string}) => {
    return (
        <div className={"notify-div"}>
            {notifyMessage}
        </div>
    )
}

export default NotifyDiv;