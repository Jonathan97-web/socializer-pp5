import React, { useEffect, useState } from "react";
import styles from "../styles/ChatBox.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { axiosReq } from "../api/axiosDefaults";
import { ListItem, Box } from "@mui/material";
import { FixedSizeList } from "react-window";
import Avatar from "./Avatar";

const ChatBox = () => {
  const [show, isShown] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [profileMessages, setProfileMessages] = useState({
    results: [] as any,
    next: null,
  });

  const currentUser = useCurrentUser();
  const id = currentUser?.pk;
  //   const is_owner = currentUser?.username === profile?.owner;

  const handleShow = () => {
    if (show) {
      isShown(false);
    } else {
      isShown(true);
    }
  };

  const handleUserSelect = (userId: any) => {
    setSelectedUser(userId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: profileMessages }] = await Promise.all([
          axiosReq.get(`/chat/?profile=${id}`),
        ]);
        setProfileMessages(profileMessages);
      } catch (err) {}
    };
    fetchData();
  }, [id]);
  console.log(profileMessages);

  const Row = ({
    index,
    style,
    data,
  }: {
    index: any;
    style: any;
    data: any;
  }) => {
    const message = data[index];
    return (
      <ListItem className="d-flex gap-2" style={style} key={index}>
        <Avatar text="" height={40} src={message.profile_image} />
        <div>{message.owner}</div>
        <br></br>
        <div>{message.message}</div>
      </ListItem>
    );
  };

  return (
    <>
      <div>
        {currentUser && !show && (
          <div className="d-flex w-100 border-2 fixed-bottom justify-content-end">
            <button className="btn btn-success" onClick={handleShow}>
              Open Chat
            </button>
          </div>
        )}
        {show && (
          <div
            className={`flex-column align-items-end d-flex  fixed-bottom ${styles.ChatBox}`}
          >
            <button className="btn btn-success" onClick={handleShow}>
              Hide chat
            </button>
            <Box sx={{ width: "100%", maxWidth: 300, bgcolor: "dark" }}>
              <FixedSizeList
                height={400}
                width={300}
                itemSize={46}
                itemCount={profileMessages.results.length}
                itemData={profileMessages.results}
              >
                {Row}
              </FixedSizeList>
            </Box>
            <input
              className="h-25 w-25"
              type="text"
              placeholder="Type a message"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ChatBox;
