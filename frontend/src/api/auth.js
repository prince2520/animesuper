// get user profile detail
export const getProfileDetail = async (email) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/authentication/profile-detail?email=${email}`
  );
  return result.json();
};

// update and Save user profile
export const saveProfile = async (
  email,
  username,
  gender,
  location,
  favorite_genre,
  photoUrl
) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/authentication/edit-profile`,
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        username: username,
        gender: gender,
        location: location,
        favorite_genre: favorite_genre,
        profile_photo: photoUrl,
      }),
    }
  );
  return result.json();
};

// get user profile statistics
export const getProfileStatistics = async (email) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/authentication/profile-satistics?email=${email}`
  );

  return result.json();
};

// contact to website administrator
export const contactUs = async (email, message) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/animeManga/contact-us`,
    {
      method: "POST",
      body: JSON.stringify({
        email: email,
        message: message,
      }),
    }
  );
  return result.json();
};
