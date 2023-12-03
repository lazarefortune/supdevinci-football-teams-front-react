import {useNavigate, useParams} from "react-router-dom";
import useApi from "../hooks/useApi.jsx";
import {useEffect, useState} from "react";
import {Loader} from "./Loader.jsx";
import {toast} from "react-toastify";
import ConfirmationModal from "./ConfirmationModal.jsx";

function TeamDetail() {
    const { teamId } = useParams();
    const { data: team, error, loading, fetchData, updateTeam, deleteTeam } = useApi(import.meta.env.VITE_API_BASE_URL + '/teams/' + teamId);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const [editMode, setEditMode] = useState(false);
    const [teamData, setTeamData] = useState({ name: '', slogan: '' });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        if (team) {
            setTeamData({ name: team.name, slogan: team.slogan });
        }
    }, [team]);

    const handleInputChange = (e) => {
        setTeamData({ ...teamData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateTeam(teamId, teamData);
        setEditMode(false);
        toast('Équipe mise à jour !')
    };

    const navigate = useNavigate();

    const handleDeleteConfirm = async () => {
        closeModal();
        await deleteTeam(teamId);
        navigate('/');
        toast('Équipe supprimée !')
    };

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div className="container">Error: {error.message}</div>;
    }

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm mx-3 border border-gray-300 p-3 rounded-md">
            {editMode ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input
                            type="text"
                            name="name"
                            value={teamData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="slogan">Slogan</label>
                        <textarea
                            name="slogan"
                            value={teamData.slogan}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className="btn-dark">Enregistrer</button>
                    <button type="button" className="btn-light" onClick={() => setEditMode(false)}>Annuler</button>
                </form>
            ) : (
                <div className="flex flex-col gap-4 w-full">
                    <h1 className="text-2xl font-bold">{team.name}</h1>
                    <p className="text-base">{team.slogan}</p>
                    <button className="btn-dark" onClick={() => setEditMode(true)}>Modifier</button>
                    <button className="btn-light" onClick={openModal}>Supprimer</button>
                    <ConfirmationModal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        onConfirm={handleDeleteConfirm}
                        title="Confirmer la suppression"
                        message="Êtes-vous sûr de vouloir supprimer cette équipe ? Cette action est irréversible."
                    />
                </div>
            )}
        </div>
    );
}

export default TeamDetail;