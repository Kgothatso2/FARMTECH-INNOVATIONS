import React, { useState } from 'react';
import '../styles/css/style.css';
import '../styles/css/bootstrap.min.css';
import '../styles/login.css';
import Header from '../components/OnHeader';
import { Link, useNavigate } from 'react-router-dom';

function Register () {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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

    if (!formData.name) {
      newErrors.name = 'UserName is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      const response = await fetch('/api/v1/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.name,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
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
      <section className='form-section-r'>
        <div className='form-imgr' />
        <div className='reg-form'>
          <h1>Register</h1>
          <p>Create Your Account!</p>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>UserName</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className='error'>{errors.name}</div>}
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className='error'>{errors.email}</div>}
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <div className='error'>{errors.password}</div>}
            </div>
            <div className='form-group'>
              <label htmlFor='confirm-password'>Confirm Password</label>
              <input
                type='password'
                id='confirm-password'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <div className='error'>{errors.confirmPassword}</div>}
            </div>
            {errors.apiError && <div className='error'>{errors.apiError}</div>}
            <button type='submit'>Sign Up</button>
            <p>Already a User? Login <Link to='/login'>Here</Link></p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Register;
