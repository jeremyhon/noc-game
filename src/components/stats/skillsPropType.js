import PropTypes from 'prop-types'
import _ from 'lodash'
import { skills } from 'lib/data'
import statPropType from './statPropType'

const skillsPropTypeObject = _.zipObject(skills, _.map(skills, () => { return statPropType.isRequired }))

const skillsPropType = PropTypes.shape(skillsPropTypeObject)

export default skillsPropType
