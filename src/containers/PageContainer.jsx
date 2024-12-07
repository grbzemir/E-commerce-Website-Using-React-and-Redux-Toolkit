import React from 'react'
import PropTypes from 'prop-types'

const PageContainer = ({ children }) => {
    return (
        <div className="w-3/4 m-auto">
            {children}
        </div>
    )
}
PageContainer.propTypes = {
    children: PropTypes.node
}

export default PageContainer

