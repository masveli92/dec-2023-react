const Simpson = ({simpson}) => {

    const {name, surname, age, info, photo} = simpson
    return (
        <div>
            <h2> {name}  {surname} </h2>
            <h3> age - {age}</h3>
            <p> {info}</p>
            <img src={photo} alt={name}/>
        </div>
    );
};

export {Simpson};