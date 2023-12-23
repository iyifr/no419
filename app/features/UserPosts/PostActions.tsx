const PostActions = () => {
    return <div className="flex flex-row justify-between items-center mt-12 px-8">
        <div className="flex flex-row items-center gap-4">
            <p className="text-gray-100 font-extralight opacity-50 text-sm">See comments (23)</p>
            <p className="text-sm text-red-200">Share this post --^</p>
        </div>

        <button className="bg-indigo-600 px-3 py-1.5 rounded-md text-sm">Add a comment</button>
    </div>
}

export default PostActions