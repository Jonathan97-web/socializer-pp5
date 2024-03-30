import React, { useEffect, useState } from "react";
import styles from "../styles/ChatBox.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { axiosReq } from "../api/axiosDefaults";
import { ListItem, Box } from "@mui/material";
import { FixedSizeList } from "react-window";
import Avatar from "./Avatar";

const ChatBox = () => {
  const [show, isShown] = useState(false);
  const [profileMessages, setProfileMessages] = useState({
    results: [] as any,
    next: null,
  });
  const [profiles, setProfiles] = useState({
    results: [] as any,
    next: null,
  });

  const [chat, setChat] = useState({
    results: [] as any,
    next: null,
  });

  const currentUser = useCurrentUser();
  const id = currentUser?.pk;

  const handleShow = () => {
    if (show) {
      isShown(false);
    } else {
      isShown(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          axiosReq.get(`/chat/messages/`),
          axiosReq.get(`/profiles/`),
          axiosReq.get(`/chat/`),
        ]);
        const profileMessages = responses[0].data;
        const profiles = responses[1].data;
        const chats = responses[2].data;
        setProfileMessages(profileMessages);
        setProfiles(profiles);
        setChat(chats);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const createChat = async () => {
    try {
      const response = await axiosReq.post(`/chat/${id}`);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

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
    const isOwner = message.owner === id;
    return (
      <ListItem className="d-flex gap-2" style={style} key={index}>
        {isOwner ? (
          <div>
            <div>{message.owner}</div>
            <div>{message.message}</div>
          </div>
        ) : (
          <div></div>
        )}
      </ListItem>
    );
  };

  const Row2 = ({
    index,
    style,
    data,
  }: {
    index: any;
    style: any;
    data: any;
  }) => {
    const profiles = data[index];
    return (
      <ListItem className="d-flex gap-2" style={style} key={index}>
        <div onClick={() => createChat()}>
          <Avatar text="" height={40} src={profiles.image} />
        </div>
        <div>
          {profiles.results}
          <a href={`/profiles/${profiles.id}`}>{profiles.owner}</a>
          <hr></hr>
        </div>
        <div>
          <hr></hr>
        </div>
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

              <FixedSizeList
                height={400}
                width={300}
                itemSize={46}
                itemCount={profiles.results.length}
                itemData={profiles.results}
              >
                {Row2}
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
