import React from 'react';

const withChildrenFunc = (fn) => (Wraped) => {
    return (props) => {
        return <Wraped {...props}>{fn}</Wraped>
    }
};

export default withChildrenFunc