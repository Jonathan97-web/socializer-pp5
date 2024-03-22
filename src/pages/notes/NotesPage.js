// react import
import React, { useState, useEffect } from "react";
// bootstrap import
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Notes from "./Notes";
// css and api import
import appStyles from "../../App.module.css";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
// assets and components
import NoResults from "../../assets/no-results.png";
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

// Page for notes
function NotesPage({ message, filter = "" }) {
  const [notes, setNotes] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();

  const [query] = useState("");

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const { data } = await axiosReq.get(`/notes/`);
        setNotes(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchNotes();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname, currentUser]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        {hasLoaded ? (
          <>
            {notes.results.length ? (
              <InfiniteScroll
                children={notes.results.map((note) => (
                  <Notes key={note.id} {...note} setNotes={setNotes} />
                ))}
                dataLength={notes.results.length}
                loader={<Asset spinner />}
                hasMore={!!notes.next}
                next={() => fetchMoreData(notes, setNotes)}
              />
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}></Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default NotesPage;
