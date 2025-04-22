// get user profile detail
export const getProfileDetail = async (token) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/authentication/profile-detail`,
    {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
  return result.json();
};

// update and Save user profile
export const saveProfile = async (
  username,
  gender,
  location,
  favorite_genre,
  photoUrl,
  token
) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/authentication/edit-profile`,
    {
      method: "PATCH",
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      },      
      body: JSON.stringify({
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
export const getProfileStatistics = async (token) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/authentication/profile-satistics`,
    {
      method : "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
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
