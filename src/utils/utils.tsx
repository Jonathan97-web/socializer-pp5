import { axiosReq } from "../api/axiosDefaults";
import { jwtDecode } from "jwt-decode";

export const fetchMoreData = async (resource: any, setResource: any) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource: any) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc: any, cur: any) => {
        return acc.some((accResult: any) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {}
};
// Helper function to update the profile data (send friend request)
export const sendFriendRequestHelper = (
  profile: any,
  clickedProfile: any,
  friend_id: any
) => {
  return profile.id === clickedProfile.id
    ? { ...profile, friend_id }
    : profile
    ? { ...profile }
    : profile;
};
// Helper function to update the profile data (remove friend)
export const acceptFriendRequestHelper = (
  profile: any,
  acceptedFriendId: any
) => {
  return {
    ...profile,
    friends: [...profile.friends, acceptedFriendId],
  };
};
// Helper function to update the profile data (remove friend)
export const removeFriendHelper = (profile: any, removedFriendId: any) => {
  return {
    ...profile,
    friends: profile.friends.filter((id: any) => id !== removedFriendId),
  };
};

// Helper function to update the profile data
export const followHelper = (
  profile: any,
  clickedProfile: any,
  following_id: any
) => {
  return profile.id === clickedProfile.id
    ? // This is the profile I clicked on,
      // update its followers count and set its following id
      {
        ...profile,
        followers_count: profile.followers_count + 1,
        following_id,
      }
    : profile.is_owner
    ? // This is the profile of the logged in user
      // update its following count
      { ...profile, following_count: profile.following_count + 1 }
    : // this is not the profile the user clicked on or the profile
      // the user owns, so just return it unchanged
      profile;
};

export const unfollowHelper = (profile: any, clickedProfile: any) => {
  return profile.id === clickedProfile.id
    ? // This is the profile I clicked on,
      // update its followers count and set its following id
      {
        ...profile,
        followers_count: profile.followers_count - 1,
        following_id: null,
      }
    : profile.is_owner
    ? // This is the profile of the logged in user
      // update its following count
      { ...profile, following_count: profile.following_count - 1 }
    : // this is not the profile the user clicked on or the profile
      // the user owns, so just return it unchanged
      profile;
};

export function setTokenTimestamp(token: any) {
  try {
    const decodedToken = jwtDecode(token);
    localStorage.setItem("tokenTimestamp", String(decodedToken.exp));
    console.log("Token timestamp set:", decodedToken.exp);
  } catch (error) {
    console.error("Error decoding token:", error);
  }
}

export const shouldRefreshToken = () => {
  return !!localStorage.getItem("refreshTokenTimestamp");
};

export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimestamp");
};
