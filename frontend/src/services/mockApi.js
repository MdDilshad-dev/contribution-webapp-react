const mockUsers = [
    { id: 1, email: "test@example.com", password: "password123", token: "mockToken123" },
  ];
  
//   export const mockLogin = async (email, password) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const user = mockUsers.find((user) => user.email === email && user.password === password);
//         if (user) {
//           resolve({ success: true, token: user.token });
//         } else {
//           reject({ success: false, message: "Invalid email or password" });
//         }
//       }, 1000); // Simulating network delay
//     });
//   };
  
//   export const mockSignup = async (email, password) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const existingUser = mockUsers.find((user) => user.email === email);
//         if (existingUser) {
//           reject({ success: false, message: "User already exists" });
//         } else {
//           const newUser = { id: mockUsers.length + 1, email, password, token: `mockToken${mockUsers.length + 1}` };
//           mockUsers.push(newUser);
//           resolve({ success: true, token: newUser.token });
//         }
//       }, 1000);
//     });
//   };

// src/services/mockApi.js

// services/mockApi.js
const users = []; // Store users temporarily

export const mockSignup = async (name,email, password) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) throw new Error("User already exists");

  const newUser = { name, email, password, token: "fake-jwt-token" };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  return newUser;
};

export const mockLogin = async (email, password) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) throw new Error("Invalid email or password");

  return { token: user.token };
};

  