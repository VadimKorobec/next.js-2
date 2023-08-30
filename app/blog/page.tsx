 'use client'
import PostSearch from "@/components/PostSearch"
import Posts from "@/components/Posts"
import { usePosts } from "@/store"
 import { getAllPosts } from "@/services/getPosts"
import { Metadata } from "next"
import { shallow } from "zustand/shallow"
 import { useEffect, useState } from "react"

export const metadata: Metadata = {
    title: 'Blog | Next App',

}

const Blog = () => {
    // const [posts,loading,getAllPosts] = usePosts(state => [
    //     state.posts,state.loading,state.getAllPosts
    // ], shallow)
    
     const [posts, setPosts] = useState<string[]>([])
     const [loadin, setLoading] = useState(true)

     useEffect(() => {
         getAllPosts()
             .then(setPosts)
             .finally(() => setLoading(false))
     }, [])

    // useEffect(() => {
    //   getAllPosts()
    // }, [getAllPosts])
    


    return <><h1 className="text-center font-bold text-3xl mb-3">Blog page</h1>
        
         <PostSearch onSearch={setPosts}/> 
        {loadin ? <h3 className=" text-center text-3xl font-bold">Loading ... </h3> : 
           <Posts posts={posts}/>
        }

    </>




}

export default Blog

