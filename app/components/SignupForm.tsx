'use client';

import isExistingUser from 'app/utils/isExistingUser';
import setUsers from 'app/utils/setUsers';
import validateForm from 'app/utils/validateForm';

import { ChangeEvent, FormEvent, useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState<User>({
    id: '',
    name: '',
    email: '',
    password: '',
    'password-confirm': '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) {
      return;
    }

    if (isExistingUser(formData.id)) {
      return;
    }

    await setUsers(formData);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className='w-full bg-red-50'>
        <label htmlFor='id' className='text-lg text-red-800'>
          ID:
        </label>
        <input
          type='text'
          id='id'
          name='id'
          value={formData.id}
          onChange={handleChange}
          className='bg-red-600'
        />
        {errors.id && <p className='error'>{errors.id}</p>}
      </div>
      <div>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className='error'>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className='error'>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className='error'>{errors.password}</p>}
      </div>
      <div>
        <label htmlFor='password-confirm'>Confirm Password:</label>
        <input
          type='password'
          id='password-confirm'
          name='password-confirm'
          value={formData['password-confirm']}
          onChange={handleChange}
        />
        {errors['password-confirm'] && (
          <p className='error'>{errors['password-confirm']}</p>
        )}
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default SignupForm;
