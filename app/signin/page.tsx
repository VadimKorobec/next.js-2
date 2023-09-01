import GoogleButton from "@/components/GoogleButton"
import SignInForm from "@/components/SignInForm"

const SignIn = () => {
    return (
        <div>
            <h1 className=" text-center font-bold text-3xl mb-2">SignIn</h1>
            <GoogleButton />
            <SignInForm/>
        </div>
    )

}

export default SignIn