import { login } from './utils';
import './index.css';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isRequesting, setIsRequesting] = useState(false);

  const handleEmail = (event) => {
    const { value } = event.target;
    setEmail(value);
  }

  const handlePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
  }

  const handleSubmit = () => {
    setError(null);
    setIsRequesting(true);


    let values = { email: email, password: password };

    login(values)
      .then(() => {
        alert('Login efetuado com sucesso');
      })
      .catch((error) => {
        setError(error);
      }).finally(() => {
        setIsRequesting(false);
      });
  }


  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {error && <div className='errorMessage'>{error.message}</div>}
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input 
            id={'email'} 
            type={'email'} 
            autoComplete='off' 
            value={email} 
            required={'Required'}
            onChange={handleEmail} 
          />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input 
            id={'password'} 
            type={'password'} 
            value={password} 
            onChange={handlePassword} 
          />
        </div>

        <div className='button'>
          <button 
            onClick={handleSubmit} 
            disabled={email === '' || password.length < 6 || isRequesting} 
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
