/**
 * @Author  dieudtq@gmail.com
 * @Version 1.0.0
 * @LastModifiedBy  dieudtq@gmail.com
 * @LastModifiedTime 2020-02-09
 */

import TemplateTag from 'common-tags/es/TemplateTag'

const cssModuleNameTag = styles => {
  const localClass = (key = '') => styles[key] || key

  return new TemplateTag({
    onSubstitution(substitution) {
      return substitution || ''
    },

    onEndResult(endResult) {
      return endResult.length !== 0
        ? endResult
            .split(' ')
            .reduce((result, key) => `${result} ${localClass(key)}`, '')
            .trim()
        : null
    },
  })
}

export default cssModuleNameTag
