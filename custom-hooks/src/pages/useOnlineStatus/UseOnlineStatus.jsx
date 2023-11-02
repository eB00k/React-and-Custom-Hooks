import useOnlineStatus from "../../hooks/useOnlineStatus";

const onlineProps = {
  textAlign: "center",
  width: "max-content",
  padding: ".5rem 1.4rem",
  border: "1px solid green",
  borderRadius: ".35rem",
  color: "green",
};

const offlineProps = {
  textAlign: "center",
  width: "max-content",
  padding: ".5rem 1.4rem",
  border: "1px solid red",
  borderRadius: ".35rem",
  color: "red",
};

const UseOnlineStatus = () => {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <div className="online-status">
        {isOnline ? (
          <div className="online" style={onlineProps}>
            Online
          </div>
        ) : (
          <div className="offline" style={offlineProps}>
            Offline
          </div>
        )}
      </div>
    </div>
  );
};

export default UseOnlineStatus;
