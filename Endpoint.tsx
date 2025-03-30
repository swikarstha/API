export const login = async (email: string, password: string) => {
  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.error || "Login failed");
  }

  return responseBody; // e.g., { token, user }
};

export const signup = async (name: string, email: string, password: string) => {
  const response = await fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.error || "Signup failed");
  }

  return responseBody; // e.g., { token, user }
};

export const logout = () => {
  localStorage.removeItem("token"); // Remove the token
  // Optionally, you could make an API call to invalidate the session on the server:
  // await fetch("http://localhost:3000/logout", { method: "POST" });
};


