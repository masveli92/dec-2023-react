const Character = ({character}) => {
    const {name, status, species, gender, image} = character
    return (
        <div>
            <h2>{name}</h2>
            <p> {species} - {gender} - {status}</p>
            <img src={image} alt={name}/>
            <hr/>
        </div>
    );
};

export {Character};