import PropTypes from 'prop-types'
import _ from 'lodash'
import skills from '../lib/skills'
import statPropType from './statPropType'

const skillsPropTypeObject = _.zipObject(skills, skills.map(() => { return statPropType }))

const skillsPropType = PropTypes.shape(skillsPropTypeObject)

export default skillsPropType
