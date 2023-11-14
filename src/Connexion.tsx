import { ChangeEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Connexion = () => {
    const [mdp, setMDP] = useState("string")
    const [pseudo, setPseudo] = useState("string")
    const navigate = useNavigate()

    const handleMdp = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => { setMDP(e.target.value);},
        []
    )

    const handlePseudo = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {setPseudo(e.target.value);},
        []
    )

    const handleConnect = useCallback(() => {
            navigate("/home")
    }, [navigate])
    
    return (
        <div>
            <div>Se connecter :</div>
            <label htmlFor="pseudo">Pseudo</label>
            <input onChange={handlePseudo} name="pseudo" type="text" />
            <label htmlFor="password">Saisie du mot de passe</label>
            <input onChange={handleMdp} name="password" type="password"/>
            <button onClick={handleConnect}>Se connecter</button>
        </div>
    

    )
};

export default Connexion;