function createUser(id, user, email, password, picture = 'https://i.pinimg.com/originals/43/e2/30/43e230a281298246296d2af6e8736f49.jpg') {
    return {
      id,
      user,
      email,
      password,
      picture
    };
  }
  
  const users = [
    createUser(1, 'John Doe', 'john@example.com', 'password123'),
    createUser(2, 'Jane Doe', 'jane@example.com', 'password456'),
    createUser(3, 'Bob Smith', 'bob@example.com', 'password789'),
    createUser(4, 'Alice Johnson', 'alice@example.com', 'password012'),
    createUser(5, 'Mike Brown', 'mike@example.com', 'password345')
  ];

export default users;