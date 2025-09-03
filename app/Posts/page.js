import Link from "next/link"
// import Todo from "../components/Todo"

export default async function PostsPage(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()
  console.log(posts)
  const postsJsx = posts.map(post => (
   <Link href={`/Posts/${post.id}`} key={post.id}>
   <div  style={{marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff'}}>
     <h1>{post.title}</h1>
     <p>{post.body}</p>
   </div>
   </Link>
  ))
  return (
    <div>
      <h1>Posts page </h1>
      <Link href="/Articles"><button>Go To Articles Page</button></Link>
       <div style={{width: '70%', margin: 'auto', textAlign: 'left' , backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px' , color: '#333'}}>
        {postsJsx}
       </div>
    </div>
  )
}


