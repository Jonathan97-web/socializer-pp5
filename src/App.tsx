import * as React from "react";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./api/axiosDefaults";
import NotesCreateForm from "./pages/notes/NotesCreateForm";
import NoteEditForm from "./pages/notes/NotesEditForm";
import NotesPage from "./pages/notes/NotesPage";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import NotFound from "./components/NotFound";
import DarkMode from "./components/DarkMode";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { currentUser } = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={`${styles.Main}`}>
        <DarkMode />
        <Routes>
          <Route
            path="/"
            element={
              <PostsPage
                message="No results found. Adjust the search keyword."
                filter=""
              />
            }
          />
          <Route
            path="/feed"
            element={
              <PostsPage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            }
          />
          <Route
            path="/liked"
            element={
              <PostsPage
                message="No results found. Adjust the search keyword or like a post."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              />
            }
          />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/posts/create" element={<PostCreateForm />} />
          <Route path="/posts/:id/edit" element={<PostEditForm />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/profiles/:id" element={<ProfilePage />} />
          <Route path="/notes/create" element={<NotesCreateForm />} />
          <Route path="/notes/" element={<NotesPage message="" />} />
          <Route path="/notes/:id/edit" element={<NoteEditForm />} />
          <Route
            path="/profiles/:id/edit/username"
            element={<UsernameForm />}
          />
          <Route
            path="/profiles/:id/edit/password"
            element={<UserPasswordForm />}
          />
          <Route path="/profiles/:id/edit" element={<ProfileEditForm />} />
          <Route element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
