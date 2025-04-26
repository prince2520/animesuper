import { throwError } from "./throwError";

export const updateAuthAPI = async (
  username,
  gender,
  location,
  photoUrl,
  favorite_genre,
  token
) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/authentication/update-auth`,
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
  const data = throwError(result);
  return data;
};

// get user profile statistics
export const getAuthStatisticsAPI = async (token) => {
  let result = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/authentication/get-auth-statistics`,
    {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );

  const data = throwError(result);
  return data;
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
  const data = throwError(result);
  return data;
};

export const loginAPI = async (email, password) => {
  let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/authentication/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const data = throwError(result);
  return data;
}


export const getAuthAPI = async (token) => {
  let result = await fetch(`${process.env.REACT_APP_SERVER_URL}/authentication/get-auth`, {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  const data = throwError(result);
  return data;
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

  const data = throwError(result);
  return data;
}