import Link from 'next/link'
import SignInButton from './SignInButton'

const Appbar = () => {
  return (
    <div className="flex justify-between items-center">
      <h1>
        <Link href="/">NextAuth</Link>
      </h1>
      <SignInButton />
    </div>
  )
}

export default Appbar