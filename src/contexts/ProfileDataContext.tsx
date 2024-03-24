import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";
import { followHelper, unfollowHelper } from "../utils/utils";

const ProfileDataContext = createContext([] as any);
const SetProfileDataContext = createContext([] as any);

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({ children }: { children: any }) => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });

  const currentUser = useCurrentUser();

  const updateProfileData = (
    prevState: any,
    clickedProfile: any,
    id: any,
    helperFunction: any
  ) => ({
    ...prevState,
    pageProfile: {
      results: prevState.pageProfile.results.map((profile: any) =>
        helperFunction(profile, clickedProfile, id)
      ),
    },
    popularProfiles: {
      ...prevState.popularProfiles,
      results: prevState.popularProfiles.results.map((profile: any) =>
        helperFunction(profile, clickedProfile, id)
      ),
    },
  });

  const handleFollow = async (clickedProfile: any) => {
    try {
      const { data } = await axiosRes.post("/followers/", {
        followed: clickedProfile.id,
      });

      setProfileData((prevState) =>
        updateProfileData(prevState, clickedProfile, data.id, followHelper)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnfollow = async (clickedProfile: any) => {
    try {
      await axiosRes.delete(`/followers/${clickedProfile.following_id}/`);

      setProfileData((prevState) =>
        updateProfileData(prevState, clickedProfile, null, unfollowHelper)
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-followers_count"
        );
        setProfileData((prevState) => ({
          ...prevState,
          popularProfiles: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <ProfileDataContext.Provider value={profileData}>
      <SetProfileDataContext.Provider
        value={{ setProfileData, handleFollow, handleUnfollow }}
      >
        {children}
      </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  );
};
