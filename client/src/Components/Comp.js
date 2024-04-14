import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { gettingPairs } from '../actions/requestActions';

function Comp({ actionData, gettingPairs }) {
    useEffect(() => {
        gettingPairs();
    }, [gettingPairs]);

    if (!actionData) {
        gettingPairs();
        return <div>Loading...</div>;
    }
    if (actionData.length === 0) {
        return <div>No data available.</div>;
    }

    return (
        <div>
            <h1>Data is shown below:</h1>
            {actionData.map((pair) => (
                <div key={pair._id}>{pair.property200}</div>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return ({
        actionData: state.action.actionData
    })//state has a action property, actionData is present in that
};

export default connect(mapStateToProps, { gettingPairs })(Comp);