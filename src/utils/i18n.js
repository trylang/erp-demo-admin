// translate router.meta.title, be used in breadcrumb sidebar tagsview
export function generateTitle(title) {
  const hasKey = this.$te('menu.' + title)

  // 如果没有判断hasKey，就执行this.$t就会报如旁边错误 [vue-i18n] Cannot translate the value of keypath 'menu.CostAdjust'. Use the value of keypath as default.
  // const translatedTitle = this.$t('menu.' + title) // $t :this method from vue-i18n, inject in @/lang/index.js

  if (hasKey) {
    return this.$t('menu.' + title) // $t :this method from vue-i18n, inject in @/lang/index.js
  } else {
    return title
  }
}

// $tc这个方法可以用以返回翻译的复数字符串, 及一个key可以对应的翻译文本，通过|进行连接:
// $te这个方法用以判断需要翻译的key在你提供的语言包(messages)中是否存在。
