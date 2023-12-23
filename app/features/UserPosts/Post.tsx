import Avatar from "../components/Avatar"
import PostActions from "./PostActions"

type PostProps = {
    imageUrl: string,
    username: string,
    body: string
}

const Post = ({ imageUrl, username, body }: PostProps) => {
    return <>
        <div className="flex flex-row justify-normal gap-4 mt-12 items-start">
            <Avatar imageUrl={imageUrl} />

            <div className="flex flex-col -mt-1">
                <p className="font-bold">{username}</p>
                <p className="font-[300]">{body}</p>
            </div>
        </div>
        <PostActions />
    </>
}

export default Post