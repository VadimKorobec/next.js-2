import Link from "next/link"
import { FC } from "react"

type PostsProps = {
    posts: any[]
}

const Posts: FC<PostsProps> = ({ posts }) => {
    return <>
        <ul>
            {posts.map((post: any) => (
                <li className=" ml-10" key={post.id}>
                    <Link className="hover:underline" href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))

            }
        </ul>
    </>
}

export default Posts