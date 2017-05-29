import PropTypes from 'prop-types'
import _ from 'lodash'
import skills from '../lib/skills'
import skillPropType from './singlePropType'

const skillsPropTypeObject = _.zipObject(skills, skills.map(() => { return skillPropType }))

const skillsPropType = PropTypes.shape(skillsPropTypeObject)

export default skillsPropType
