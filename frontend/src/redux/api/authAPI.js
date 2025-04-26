export const updateAuthAPI = async (
  username,
  gender,
  location,
  photoUrl,
  favorite_genre,
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
export const getAuthStatisticsAPI = async (token) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/authentication/profile-satistics`,
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

// contact to website administrator
export const contactUsAPI = async (email, message) => {
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

export const loginAPI = async (email, password) => {
  let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/authentication/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  return result.json();
}


export const getUserAPI = async (token) => {
  let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/authentication/get-user`, {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  return result.json();
}

export const signUpAPI = async (username, email, password, confirmPassword) => {
  let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/authentication/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    }),
  });

  return result.json();
}