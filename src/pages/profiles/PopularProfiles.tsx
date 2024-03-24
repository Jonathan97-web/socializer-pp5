import React from "react";
import { Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";

const PopularProfiles = ({ mobile }: { mobile: any }) => {
  const profileData = useProfileData();
  const popularProfiles = profileData ? profileData.popularProfiles : null;

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {popularProfiles && popularProfiles.results.length ? (
        <>
          <p>Most followed profiles.</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularProfiles &&
                popularProfiles.results
                  .slice(0, 4)
                  .map((profile: any) => (
                    <Profile key={profile.id} profile={profile} mobile />
                  ))}
            </div>
          ) : (
            popularProfiles &&
            popularProfiles.results.map((profile: any) => (
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        <Asset spinner src="" message="" />
      )}
    </Container>
  );
};

export default PopularProfiles;
