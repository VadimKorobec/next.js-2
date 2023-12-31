import { authConfig } from "@/configs/auth"
import { getServerSession } from "next-auth"

const Profile = async () => {
    const session = await getServerSession(authConfig)
    return <div><h1 className=" text-center font-bold text-3xl">Profile of {session?.user?.name}</h1>
        {session?.user?.image && <img src={ session.user.image} alt="user" />}
    </div>
}
export default Profile