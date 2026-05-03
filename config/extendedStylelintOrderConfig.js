import { fileURLToPath } from 'url';
import special from '../groups/special.js';

const pluginPath = fileURLToPath(new URL('../plugin/index.js', import.meta.url));

export default ({
  'border-in-box-model': borderInBoxModel = false,
  'empty-line-between-groups': emptyLineBetweenGroups = false,
} = {}) => ({
  plugins: ['stylelint-order', pluginPath],
  rules: {
    'order/properties-order': [],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: special,
      },
    ],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': borderInBoxModel,
        'empty-line-between-groups': emptyLineBetweenGroups,
      },
    ],
  },
});
