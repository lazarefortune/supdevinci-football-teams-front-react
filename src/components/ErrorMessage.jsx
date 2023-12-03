const ErrorMessage = ({ error }) => {
    return (
        <div className="flex justify-center mt-2">
            <p className="text-center text-red-400 border border-red-400 px-4 py-3 bg-red-50">{error.message}</p>
        </div>
    );
}

export default ErrorMessage;