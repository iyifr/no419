import Button from "../components/Button"

const UserPostHeader = () => {
    return <div className="flex flex-row justify-between items-center lg:mt-10 mt-6 w-full px-2 lg:px-4 backdrop-filter backdrop-blur-lg sticky top-1 rounded-xl bg-opacity-30 py-4">
        <h2 className="text-xl">Recent Posts</h2>
        <Button><span className="text-md">Sort by</span></Button>
    </div>
}

export default UserPostHeader