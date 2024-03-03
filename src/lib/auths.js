import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
const SECRET_KEY = 'your-secret-key';

const users = [ // AQUI VOCÊ PODE ADICIONAR USUÁRIOS!
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    passwordHash: '$2a$10$y7udUiaRl/8zKADgWu9PmOymc8b4lKn..HWXBR5vgJZBPuVVDyAJC', // hashed "password"
  },
  {
    id: 2,
    name: 'Pedro',
    email: 'oizamadpedro@gmail.com',
    passwordHash: '$2a$12$A3rN6.qtd1MCkGA7S5sXqeHMw8DwpBO7m1UXxGzLhLoFlNPo8eYvi' // SENHA: "123321"
  }
];

export const loginUser = async (email, password) => {
    const user = users.find((u) => u.email === email);
    if (!user) return false;
    console.log(user);
    if (await bcrypt.compare(password, user.passwordHash)) {
        try {
            console.log(user.id);
            console.log(SECRET_KEY)
            const token = await jwt.sign({ userId: user.id }, SECRET_KEY);
            console.log("token>", token);
            return token;
        } catch (error) {
            console.error('Error signing token:', error);
            return false;
        }
    }
    return false;
  };
  
  export const getUserProfile = async () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      const user = users.find((u) => u.id === decoded.userId);
      if (!user) return null;
      return { id: user.id, name: user.name, email: user.email };
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };