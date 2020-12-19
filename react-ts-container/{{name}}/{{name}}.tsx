import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RootStateTypes } from '@config/roots';
import { bem } from '@utils/formatters';
import './{{name}}.scss';

const cn = bem('{{name}}');

const mapStateToProps = (state: RootStateTypes) => ({

});

const mapDispatchToProps = {

};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const {{name}}: React.FC<Props> = (props) => {
    const {

    } = props;

    useEffect(() => {

    }, []);

    return (
        <div className={cn()}></div>
    );
};

const {{name}}Connected = connect(mapStateToProps, mapDispatchToProps)({{name}});

export { {{name}}Connected as {{name}} };
