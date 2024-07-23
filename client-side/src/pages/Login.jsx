import React, { useState } from 'react';
import '../styles/css/style.css';
import '../styles/css/bootstrap.min.css';
import '../styles/login.css';
import Header from '../components/OnHeader';
import { Link, useNavigate } from 'react-router-dom';

function Login () {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    try {
      const response = await fetch('http://localhost:3010/api/v1/users/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        const token = data.token;

        localStorage.setItem('token', token);
        // console.log('Login successful, token stored in localStorage:', token);
        // console.log('Local Token:', localStorage.getItem('token'));
        // Redirect to the home page or dashboard
        navigate('/dashboard');
      } else {
        setErrors({ apiError: data.message });
      }
    } catch (error) {
      console.error('Error:', error);
      setErrors({ apiError: 'An error occurred. Please try again.' });
    }
  };

  return (
    <div className='bdy'>
      <Header />
      <section class='form-section'>
        <div className='form-img' />
        <div className='login-form'>
          <h1>Login</h1>
          <p>To access your Dashboard!</p>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type='email'
                id='email'
                name='email'
                required
                placeholder='Your Email (ex. john@example.com)'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className='error'>{errors.email}</div>}
            </div>
            <div>
              <input
                type='password'
                id='password'
                name='password'
                required
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <div className='error'>{errors.password}</div>}
            </div>
            {errors.apiError && <div className='error'>{errors.apiError}</div>}
            <button>Login</button>
            <p>Don't have an Account? Sign up <Link to='/register'>Here</Link></p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
