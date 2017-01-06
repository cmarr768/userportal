import { connect } from 'react-redux';
import ImgurCards from '../components/imgurCards';

const getImgur = (Imgur) => {
    return Imgur;
};

const mapStateToProps = (state) => {
    return {
        Imgur: getImgur(state.Imgur)
    }
};

const ImgurCardsContainer = connect(
    mapStateToProps
)(ImgurCards);

export default ImgurCardsContainer;