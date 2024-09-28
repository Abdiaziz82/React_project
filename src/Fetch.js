

// import { useState, useEffect } from 'react';
 
// function Fetch() {
//   const[post,setpost]=useState([])

//   useEffect(  () => {
    
//     const getPost = async() => {
//       const response =  await fetch("http://localhost:5000/post");
//       const data = await response.json();
//       setpost(data) 

//     }
//     getPost();
   
//   } , [])



//   return (
//     <div className='row pt-6'   style={{backgroundColor:'#FFF7EF'}}>
//       <h1 className='pl-20 pb-8 text-2xl'>
//       Welcome to [Your App Name]! Find nearby clinics and hospitals with ease, and book your appointments quickly and conveniently.<br></br><span className='text-center pl-8'> We're here to make your healthcare journey smoother!</span></h1>
//     {
//       post.map((post) => {
//         return (
//           <div className='col-3'>
//           <div class=" max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
//               <div class="relative">
//                   <img class="" src={post.image} alt="Product Image"/>
//                   <div    class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">OPEN
//                   </div>
//               </div>
//               <div class="p-4">
//                   <h3 class="text-lg font-medium mb-2">{post.title}</h3>
//                   <p class="text-gray-600 text-sm mb-4">{post.description}</p>
//                   <div class="flex items-center justify-between">
//                     <button className='px-2  py-1 rounded text-white' style={{backgroundColor:'#005B48'}}>skip</button>
//                       <button style={{backgroundColor:'#713F12'}} class="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//                   Book an appointment
//                 </button>
//                   </div>
//               </div>
//               </div>
//               </div>
              
//         )
//       })
//       }
//    </div>
//   )

// }

// export default Fetch;


// import { useState, useEffect } from 'react';

// function Fetch() {
//   const [posts, setPosts] = useState([]);

//   // Fetch posts from the server
//   useEffect(() => {
//     const getPosts = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/post"); // Adjust endpoint if needed
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setPosts(data); // Assuming data is an array of posts
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     getPosts();
//   }, []);

//   // Handle deleting a post
//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/post/${id}`, {
//         method: 'DELETE',
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       // Update state to remove the deleted post
//       setPosts((prevPosts) => prevPosts.filter(post => post.id !== id));
//     } catch (error) {
//       console.error('Error deleting post:', error);
//     }
//   };

//   return (
//     <div className='row pt-6' style={{ backgroundColor: '#FFF7EF' }}>
//       <h1 className='pl-20 pb-8 text-2xl'>
//         Welcome to [Your App Name]! Find nearby clinics and hospitals with ease, and book your appointments quickly and conveniently.
//         <br />
//         <span className='text-center pl-8'>We're here to make your healthcare journey smoother!</span>
//       </h1>
//       {posts.map(post => (
//         <div key={post.id} className='col-3'>
//           <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
//             <div className="relative">
//               <img className="w-full" src={post.image} alt="Product Image" />
//               <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
//                 OPEN
//               </div>
//             </div>
//             <div className="p-4">
//               <h3 className="text-lg font-medium mb-2">{post.title}</h3>
//               <p className="text-gray-600 text-sm mb-4">{post.description}</p>
//               <div className="flex items-center justify-between">
//                 <button 
//                   className='px-2 py-1 rounded text-white' 
//                   style={{ backgroundColor: '#005B48' }}
//                   onClick={() => handleDelete(post.id)}
//                 >
//                   Skip
//                 </button>
//                 <button 
//                   style={{ backgroundColor: '#713F12' }} 
//                   className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//                 >
//                   Book an appointment
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Fetch;


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
function Fetch() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: '',
    image: '',
    description: '',
    location:''
  });

  // Fetch posts from the server
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch("http://localhost:3000/post"); // Adjust endpoint if needed
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data); // Assuming data is an array of posts
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getPosts();
  }, []);

  // Handle creating a new post
  const handleCreate = async () => {
    try {
      const response = await fetch('http://localhost:3000/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const createdPost = await response.json();
      setPosts((prevPosts) => [...prevPosts, createdPost]);
      setNewPost({ title: '', image: '', description: '',location:'' }); // Reset form fields
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  // Handle deleting a post
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/post/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setPosts((prevPosts) => prevPosts.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value
    }));
  };

  return (
    <div className='  items-center row pt-56 ' style={{ backgroundColor: '#FFF7EF' }}>
      <h1 className='serv pl-20 pb-8 text-2xl'>
        Welcome to <span style={{color:'#008D7D'}}>HealthHub!</span> Find nearby clinics and hospitals with ease, and book your appointments quickly and conveniently.
        <br />
        <span className='text-center pl-8'>We're here to make your healthcare journey smoother!</span>
      </h1>

      {/* Form for creating a new post */}
      <div className='  pl-20 pb-8 flex justify-around'>
        <h2 className='hub text-xl font-bold mb-4'>Post  a New Hospital</h2>
        <div className='mb-4'>
          <input
            type='text'
            name='title'
            value={newPost.title}
            onChange={handleInputChange}
            placeholder='Title'
            className='border rounded-md p-2 w-full'
          />
        </div>
        <div className='mb-4'>
          <input
            type='text'
            name='image'
            value={newPost.image}
            onChange={handleInputChange}
            placeholder='Image URL'
            className='border rounded-md p-2 w-full'
          />
        </div>

        <div className='mb-4'>
          <input
            type='text'
            name='location'
            value={newPost.location}
            onChange={handleInputChange}
            placeholder='location'
            className='border rounded-md p-2 w-full'
          />
        </div>


        <div className='mb-4'>
          <textarea
         
            name='description'
            value={newPost.description}
            onChange={handleInputChange}
            placeholder='Description'
            rows='4'
            className='border rounded-md p-2 w-full'
          />
        </div>
        <button style={{marginBottom:"5rem"}}
          onClick={handleCreate}
          className='hub bg-[#008D7D] hover:bg-blue-600 text-white font-bold px-8 rounded'
        >
        Add Hospital
        </button>
      </div>

      {/* Display fetched posts */}
      {posts.map(post => (
        <div key={post.id} className='  col-12 col-md-6 col-lg-4 mb-4   ' >
          <div className="  max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
            <div className=" relative">
              <img className="w-full" src={post.image} alt="Product Image" />
              <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                OPEN 
              </div>
            </div>
            <div className="p-4">
              <h3 className="reviews text-lg font-medium mb-2">{post.title}</h3>
              <p className="hub text-gray-600 text-sm mb-4">{post.description}</p>



              <div class="flex items-center pb-8">
              <div class="flex ">
                                <svg class="w-4 h-4 mx-px fill-current text-green-600"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                    <path
                                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                    </path>
                                </svg>
                                <svg class="w-4 h-4 mx-px fill-current text-green-600"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                    <path
                                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                    </path>
                                </svg>
                                <svg class="w-4 h-4 mx-px fill-current text-green-600"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                    <path
                                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                    </path>
                                </svg>
                                <svg class="w-4 h-4 mx-px fill-current text-green-600"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                    <path
                                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                    </path>
                                </svg>
                                <svg class="w-4 h-4 mx-px fill-current text-green-600"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                    <path
                                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                    </path>
                                </svg>
                            </div>
                            <div class=" flex gap-2 text-gray-600 ml-2 text-sm md:text-base mt-1">
                            <i class=" pt-1 fa-solid fa-location-dot"></i>
                            <p className='serv'>{post.location}</p>
                            </div>
                            </div>
















              <div className="flex items-center justify-between">
                <button
                  className='reviews px-2 py-1 rounded text-white'
                  style={{ backgroundColor: '#005B48' }}
                  onClick={() => handleDelete(post.id)}
                >
             Remove
                </button>
               <Link to="/book"> <button
                  style={{ backgroundColor: '#713F12' }}
                  className="hub bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Book an appointment
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Fetch;
