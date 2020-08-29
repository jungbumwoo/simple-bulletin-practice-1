import React, { Component } from "react";
import { connect } from "react-redux";
import BoardList from "./BoardList";
import * as boardActions from "../../store/modules/board";

class BoardListContainer extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        console.log("componentDidMount!! - BoardListContainer");
        const { apiGetBoards } = this.props;
        apiGetBoards(); 
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps!! - BoardListContainer");
        if (nextProps.boards) {
            this.setState({
                ...this.state,
                loading: false
            });
        }
    }

    render() {
        const { loading } = this.state;
        const { boards, boardDetail, boardWrite } = this.props;
        return (
            <BoardList 
                loading={loading}
                boardWrite={boardWrite}
                boardDetail={boardDetail}
                boards={boards}
            />
        )
    }
}

const mapStateToProps = state => ({
    boards: state.board.boards,
    boardDetail: state.board.boardDetail,
    boardWrite: state.board.boardWrite
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    apiGetBoards: () => dispatch(boardActions.apiGetBoards())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardListContainer);