const Launch = ({launch}) => {
    return (
        <div>
            <div> {launch.mission_name} - {launch.launch_year}</div>
            <img src={launch.links.mission_patch_small}/>
        </div>
    );
};

export default Launch;