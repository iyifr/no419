import UserPostHeader from "./PostHeader"
import Posts from "./Posts"

const UserPostsWidget = () => {
    const posts = Array(120).fill('xyz')
    return <>
        <UserPostHeader />
        <Posts items={posts} />
    </>
}

export default UserPostsWidget