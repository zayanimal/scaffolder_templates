import React from 'react';
import { bem } from '@utils/formatters';
import './{{name}}.scss';

const cn = bem('{{name}}');

interface Props {

};

const {{name}}: React.SFC<Props> = (props) => {
    const {

    } = props;

    return (
        <div className="{{name}}"></div>
    );
};

export { {{name}} };
