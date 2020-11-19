import React from 'react';
import { bem } from '@utils/formatters';
import './{{name}}.scss';

const cn = bem('{{name}}');

interface Props {

}

const {{name}}: React.FC<Props> = (props) => {
    const {

    } = props;

    return (
        <div className={cn()}></div>
    );
};

export { {{name}} };
