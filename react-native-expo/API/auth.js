const API_URL = "http://localhost:3000/auth";

export const login = async (username, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const data = await response.json();
  return data;
};

export const register = async (username, password) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  const data = await response.json();
  return data;
};

export const logout = async () => {
  const response = await fetch(`${API_URL}/logout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }

  // No data to return for logout
};
