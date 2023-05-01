import { useState, useEffect } from 'react';
export function SignupForm() {
  const [email, setEmail] = useState(
    () => JSON.parse(window.localStorage.getItem('email')) ?? ''
  );
  const [password, setPassword] = useState(
    () => JSON.parse(window.localStorage.getItem('password')) ?? ''
  );

  useEffect(() => {
    window.localStorage.setItem('email', JSON.stringify(email));
  }, [email]);

  useEffect(() => {
    window.localStorage.setItem('password', JSON.stringify(password));
  }, [password]);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <form action="">
      <label htmlFor="">
        <span>Post</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="">
        <span>Password</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Registr</button>
    </form>
  );
}
