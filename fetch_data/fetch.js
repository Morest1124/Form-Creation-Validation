/*const fetchUserData = async () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users"; // Replace with your API URL
  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = ""; // Clear existing content

    const userList = document.createElement("ul");
    users.forEach((user) => {
      const userListItem = document.createElement("li");
      userListItem.textContent = user.name;
      userList.appendChild(userListItem);
    });
    dataContainer.appendChild(userList);
  } catch (error) {
    dataContainer.innerHTML = ""; // Clear existing content
    dataContainer.textContent = "Failed to load user data.";
  }
};*/

document.addEventListener("DOMContentLoaded", fetchUserData);

document.addEventListener("DOMContentLoaded", fetchUserData);

const fetchUserData = async () => {
  const apiUrl = fetch("https://jsonplaceholder.typicode.com/users");
  const dataContainer = document.getElementById("api-data");

  try {
    const Response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await Response.json();
    dataContainer.innerText = "";
  } catch {}
  const userList = document.getElementsByTagName("ul");
  users.forEach((userList, index) => {
    for (user = users.length; user >= 1; user++);
    {
      console.log(userList);
    }
  });
};

fetchUserData();
