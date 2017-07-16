import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classnames from 'classnames'

const CardSubList = ({className, subtitle, list, ListComponent}) => (
  <div className={classnames(className, 'card-container')} >
    <h3 className='card-subtitle'>{subtitle}: </h3>
    <ListComponent list={list} />
  </div>
)

CardSubList.propTypes = {
  className: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  list: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  ListComponent: PropTypes.func.isRequired,
}

export default CardSubList
