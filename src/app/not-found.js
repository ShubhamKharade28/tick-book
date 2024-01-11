import Nav from "./components/nav";

const NotFound = () => {
    return (
        <div className="flex flex-col h-screen w-screen items-center">
            <Nav />
            <div className="gap-10 text-4xl pb-20 font-bold w-full h-full flex items-center justify-center pink-text">
                <span>404</span>
                <span className="h-14 pink-bg w-0.5"></span>
                <span>Page not found</span>
            </div>
        </div>
    )
}

export default NotFound;