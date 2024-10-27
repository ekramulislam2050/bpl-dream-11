import PropTypes from "prop-types"

const Main = ({ data }) => {
    // console.log(data)
    const { playerName, country, playerType, rating, handed, price } = data
    return (
        <div>
            <div className="border">
                <div>
                    <img src="#" alt="" />
                </div>
                <h3>{playerName}</h3>
                <div>
                    <p>{country}</p>
                    <button>{playerType}</button>
                </div>
                <div>
                    <h4>{rating}</h4>
                    <p>{handed}</p>
                    <p>{price}</p>
                    <button>Choose Player</button>
                </div>
            </div>


        </div>
    );
};
Main.propTypes = {
    data: PropTypes.object.isRequired,
}
export default Main;