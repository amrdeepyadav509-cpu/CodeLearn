import React, { useState } from 'react';
import API from '../../api';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', emailOrPhone: '', password: '' });
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const onChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('name', form.name);
      data.append('emailOrPhone', form.emailOrPhone);
      data.append('password', form.password);
      if (photo) data.append('photo', photo);

      const res = await API.post('/auth/register', data, { headers: { 'Content-Type': 'multipart/form-data' }});
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.msg || 'Error');
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={submit}>
        <input name="name" placeholder="Name" onChange={onChange} required />
        <input name="emailOrPhone" placeholder="Email or Phone" onChange={onChange} required />
        <input name="password" placeholder="Password" type="password" onChange={onChange} required />
        <input type="file" onChange={e => setPhoto(e.target.files[0])} accept="image/*" />
        <button type="submit">Register</button>
      </form>
      <p>Already have account? <Link to="/login">Login</Link></p>
    </div>
  );
}
