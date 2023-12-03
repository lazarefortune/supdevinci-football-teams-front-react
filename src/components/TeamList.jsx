import {Loader} from "./Loader.jsx";
import useApi from "../hooks/useApi.jsx";
import {useEffect} from "react";
import ErrorMessage from "./ErrorMessage.jsx";
import {Link} from "react-router-dom";
function TeamList() {

    console.log(import.meta.env.API_BASE_URL + '/teams');
    const { data: teams, loading, error, fetchData } = useApi(import.meta.env.VITE_API_BASE_URL + '/teams');

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (loading) {
        return (
            <Loader />
        );
    }

    if (error) {
        return <ErrorMessage error={{message: 'Une erreur est survenue, impossible de contacter le backend'}} />;
    }

    return (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {teams.map((team) => (
                <li key={team.id} className="team-card">
                    <div className="team-card-description">
                        <div className="h-10 w-10 rounded-full bg-slate-400 animate-pulse">
                        </div>
                        <div>
                            <h2 className="text-xl font-bold">{team.name}</h2>
                            <p className="text-sm">{team.slogan}</p>
                        </div>
                    </div>
                    <div className="team-card-actions">
                        <Link
                           className="btn-dark"
                           to={'/teams/' + team.id}>
                            Show
                        </Link>
                        {/*<button className="btn-light">*/}
                        {/*    Players*/}
                        {/*</button>*/}
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default TeamList;