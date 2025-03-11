import React, { useState } from 'react';
import axios from 'axios';
const New = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);

  function createNewPost(ev) {
    ev.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("content", content);
    if (file) {
      formData.append("file", file);
    }
    const f= async ()=>{
    try {
      const response = await axios.post("http://localhost:5001/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("created succesfully:", response.data);
      // Handle success (e.g., redirect or show a message)
    } catch (error) {
      console.error("Error creating post:", error);
     
   
  }
}
f()
}

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form onSubmit={createNewPost} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl space-y-4">
        <input
          type='text'
          placeholder='Title'
          
          onChange={(e) => setTitle(e.target.value)}
          
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type='text'
          placeholder='Summary'
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <textarea
          placeholder='Write your content here...'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[200px]"
        ></textarea>
        
        <input
          type='file'
          className="w-full p-2 border border-gray-300 rounded bg-white cursor-pointer"
          onChange={(ev)=>{setFile(ev.target.files)}}
        />
        
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default New;


