async function fetchUserData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      return data.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email
      }));
    } catch (error) {
      console.error('Error fetching user data:', error);
      return [];
    }
  }
  async function getUsersDetails() {
    const users = await fetchUserData();
    console.log(users);
  }
  getUsersDetails();