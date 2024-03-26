import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";
import {
  followHelper,
  unfollowHelper,
  sendFriendRequestHelper,
  acceptFriendRequestHelper,
  removeFriendHelper,
} from "../utils/utils";

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

  const handleSendFriendRequest = async (clickedProfile: any) => {
    try {
      const { data } = await axiosRes.post("/friends/", {
        friend: clickedProfile.id,
      });

      setProfileData((prevState) =>
        updateProfileData(
          prevState,
          clickedProfile,
          data.id,
          sendFriendRequestHelper
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleAcceptFriendRequest = async (clickedProfile: any) => {
    try {
      const { data } = await axiosRes.patch(
        `/friends/${clickedProfile.friend_id}/`,
        {
          accepted: true,
        }
      );

      setProfileData((prevState) =>
        updateProfileData(
          prevState,
          clickedProfile,
          data.id,
          acceptFriendRequestHelper
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveFriend = async (clickedProfile: any) => {
    try {
      await axiosRes.delete(`/friends/${clickedProfile.friend_id}/`);

      setProfileData((prevState) =>
        updateProfileData(prevState, clickedProfile, null, removeFriendHelper)
      );
    } catch (err) {
      console.log(err);
    }
  };

  // Helper function to update the profile data
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

  // Used to follow a profile
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
  // Used to unfollow a profile
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
  // Fetch the popular profiles by followers count
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
