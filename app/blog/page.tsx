import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Blog | Next App',
  
}

export default async function Blog (){
    const posts = await getData()

    return <><h1 className="text-center font-bold text-3xl mb-3">Blog page</h1>
        {posts.map((post: any) => (
            <li className=" ml-10"  key={post.id}>
                <Link className="hover:underline"  href={`/blog/${post.id}`}>{ post.title}</Link>
            </li>
        ))
        
        }
    </>
    
        

    
}



 const getData =async () => {
     const response = await fetch('https://jsonplaceholder.typicode.com/posts',
         { next: { revalidate: 60 } })
     
     if (!response.ok) throw new Error("Unable to fetch posts")
     
       return response.json()
 }