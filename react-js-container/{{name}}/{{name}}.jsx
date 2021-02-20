// @flow
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { RootState } from '../../__data__/reducers'
import { {{name}} } from './{{name}}.css'

const mapStateToProps = (state: RootState) => ({

})

const mapDispatchToProps = {

}

type Props = {

}

const {{name}} = (props: Props) => {
    const {

    } = props

    useEffect(() => {

    }, [])

    return (
        <div className={{{name}}}></div>
    )
}

const {{name}}Connected: any = connect(
    mapStateToProps,
    mapDispatchToProps
)({{name}})

export { {{name}}Connected as {{name}} }
