import stylelint from 'stylelint';
import stylelintOrderPlugins from 'stylelint-order';
import configCreator from '../config/configCreator.js';

const { rule: propertiesOrderRule } = stylelintOrderPlugins.find(
  (p) => p.ruleName === 'order/properties-order',
);

export const ruleName = 'plugin/rational-order';

const plugin = stylelint.createPlugin(
  ruleName,
  (enabled, options, context) =>
    (postcssRoot, postcssResult) => {
      const validOptions = stylelint.utils.validateOptions(
        postcssResult,
        ruleName,
        {
          actual: enabled,
          possible: [true, false],
        },
        {
          actual: options,
          optional: true,
          possible: {
            'border-in-box-model': [true, false],
            'empty-line-between-groups': [true, false],
          },
        },
      );
      if (!enabled || !validOptions) {
        return;
      }
      const expectation = configCreator(options);
      propertiesOrderRule(expectation, undefined, context)(postcssRoot, postcssResult);
    },
);

export default plugin;
