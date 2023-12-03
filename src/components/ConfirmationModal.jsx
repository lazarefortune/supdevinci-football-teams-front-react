const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <h2 className="modal-title">{title}</h2>
                <p className="modal-message">{message}</p>
                <div className="modal-actions">
                    <button onClick={onClose} className="btn-light">
                        Annuler
                    </button>
                    <button onClick={onConfirm} className="btn-dark">
                        Confirmer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
