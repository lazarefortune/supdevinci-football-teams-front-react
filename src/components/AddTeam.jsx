import {useState} from "react";
import useApi from "../hooks/useApi.jsx";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";

const AddTeam = () => {

    const [teamData, setTeamData] = useState({ name: '', slogan: '' });

    const handleInputChange = (e) => {
        setTeamData({ ...teamData, [e.target.name]: e.target.value });
    };

    const { createTeam } = useApi(import.meta.env.VITE_API_BASE_URL + '/teams');

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        // check if team name or slogan is empty
        if (teamData.name === '' || teamData.slogan === '') {
            toast.error('Les champs ne peuvent pas être vides');
            return;
        }

        try {
            await createTeam(teamData);
            toast.success('Équipe ajoutée avec succès!');
            setTeamData({ name: '', slogan: '' }); // Réinitialiser le formulaire

            navigate('/');
        } catch (error) {
            toast.error('Erreur lors de l\'ajout de l\'équipe');
        }
    };

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm mx-3 border border-gray-300 p-3 rounded-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                    <h1 className="text-xl font-bold leading-tight tracking-tight">Ajouter une équipe</h1>
                    <div className="form-group">
                        <label htmlFor="name">Nom*</label>
                        <input
                            type="text"
                            name="name"
                            value={teamData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="slogan">Slogan*</label>
                        <textarea
                            name="slogan"
                            value={teamData.slogan}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className="btn-dark">Enregistrer</button>
                </form>
        </div>
    )
}

export default AddTeam