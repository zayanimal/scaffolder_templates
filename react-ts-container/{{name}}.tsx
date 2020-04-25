import React from 'react';
import { connect } from 'react-redux';
import './{{name}}.scss';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

interface {{name}}Props {

};

const {{name}}: React.SFC<{{name}}Props> = (props) => {
    const {

    } = props;

    return (
        <div className="{{name}}"></div>
    );
};

const {{name}}Connected = connect(mapStateToProps, mapDispatchToProps)({{name}});

export { {{name}}Connected as {{name}} };
