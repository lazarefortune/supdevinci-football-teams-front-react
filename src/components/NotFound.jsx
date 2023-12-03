const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-6xl font-bold text-slate-900">404</h1>
            <p className="text-2xl text-slate-800">Page not found</p>
            <a href="/" className="btn-dark mt-4">Go back home</a>
        </div>
    )
}

export default NotFound