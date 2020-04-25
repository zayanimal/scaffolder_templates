import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bem } from '@utils/formatters';
import './{{name}}.scss';

const cn = bem('{{name}}');

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

type Props = ReturnType<tyeof mapStateToProps> & typeof mapDispatchToProps;

const {{name}}: React.SFC<Props> = (props) => {
    const {

    } = props;

    useEffect(() => {

    }, []);

    return (
        <div className="{{name}}"></div>
    );
};

const {{name}}Connected = connect(mapStateToProps, mapDispatchToProps)({{name}});

export { {{name}}Connected as {{name}} };
