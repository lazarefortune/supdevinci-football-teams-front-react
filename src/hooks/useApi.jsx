import {useState, useCallback} from "react";

const useApi = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
            setError(null)
        } catch (error) {
            console.log(error.code);
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [url])

    const updateTeam = async (id, updatedData) => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/teams/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            fetchData();
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    const deleteTeam = async (id) => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/teams/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    const createTeam = async (newData) => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/teams`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };


    return {
        data,
        loading,
        error,
        fetchData,
        updateTeam,
        deleteTeam,
        createTeam
    }
}

export default useApi;