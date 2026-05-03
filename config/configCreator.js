import special from '../groups/special.js';
import positioning from '../groups/positioning.js';
import boxModel from '../groups/boxModel.js';
import typography from '../groups/typography.js';
import visual from '../groups/visual.js';
import animation from '../groups/animation.js';
import misc from '../groups/misc.js';

export default ({
  'border-in-box-model': borderInBoxModel = false,
  'empty-line-between-groups': emptyLineBetweenGroups = false,
} = {}) =>
  [
    ['Special', special],
    ['Positioning', positioning],
    ['Box Model', boxModel({ border: borderInBoxModel })],
    ['Typography', typography],
    ['Visual', visual({ border: !borderInBoxModel })],
    ['Animation', animation],
    ['Misc', misc],
  ].map(([groupName, properties]) => ({
    emptyLineBefore: emptyLineBetweenGroups ? 'always' : 'never',
    properties,
    groupName,
  }));
