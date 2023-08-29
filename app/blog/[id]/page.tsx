
import { Metadata } from "next"
import Link from "next/link"
import { FC } from "react"

type PostProps = {
    params: {
        id: string
    }
}

export async function generateMetadata({ params: { id } }: PostProps): Promise<Metadata>{
    const post = await getData(id)
    return {
        title:post.title,
    }
}


const Post: FC<PostProps> = async ({ params }) => {
    const post = await getData(params.id)
    return <>
        <h1 className=" ml-5 font-bold text-2xl mb-2">{post.title}</h1>
        <p className=" ml-5 font-medium mb-3 ">{post.body}</p>
        <Link className="ml-5 py-1 px-1 bg-gray-500 rounded-md" href='/blog'>Back</Link>
    </>
}

export default Post

const getData =async (id:string) => {
     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{next:{revalidate:60}})
       return response.json()
 }