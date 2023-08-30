'use client'
import { getPostsBySearch } from '@/services/getPosts'
import { FormEventHandler,useState } from 'react'

type PostSearchProps = {
    onSearch: (value: any[]) => void
}

const PostSearch =({onSearch}:PostSearchProps) => {
    const [search, setSearch] = useState('')

    const handleSubmit: FormEventHandler<HTMLFormElement> =async (event) => { 
        event.preventDefault()

        const posts = await getPostsBySearch(search)
        
        onSearch(posts)
    }
    
    return <form onSubmit={handleSubmit} className='flex justify-center gap-2 mb-2'>
        <input className= 'border-slate-950 rounded border px-1 py-1 outline-none' type="search"
            placeholder='search'
            value={search}
            onChange={(event) => setSearch(event?.target.value)} />
        <button className=' px-1 py-1 bg-gray-500 rounded text-white' type='submit'>Search</button>
    </form>
}

export default PostSearch