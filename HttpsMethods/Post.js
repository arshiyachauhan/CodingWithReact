import React, { useState } from 'react';
import axios from 'axios';

const PostDataComponent = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePostRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: form.name,  // Assuming you want to send name as title
        body: form.email,   // Assuming you want to send email as body
        userId: 1,          // Just an example field
      });
      setResponseData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handlePostRequest}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
      
      {error && <p>Error: {error}</p>}
      
      {responseData && (
        <div>
          <h3>Response Data:</h3>
          <p>Title: {responseData.title}</p>
          <p>Body: {responseData.body}</p>
        </div>
      )}
    </div>
  );
};

export default PostDataComponent;
