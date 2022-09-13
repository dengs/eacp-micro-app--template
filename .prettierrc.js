/**
 * prettier 格式化配置
 */
module.exports = {
  // 行宽度
  printWidth: 160,
  // 指定每个缩进级别的空格数
  tabWidth: 2,
  // 使用制表符缩进
  useTabs: false,
  // 在行末尾加上分号
  semi: true,
  // 使用单引号
  singleQuote: false,
  // 对象属性是否使用引号 <as-needed|consistent|preserve>
  // 释义：as-needed 仅在需要的时候使用、consistent 有一个属性需要引号，就都需要引号、preserve 保留用户输入的情况
  quoteProps: "preserve",
  // jsx 使用单引号
  jsxSingleQuote: false,
  // 对象、数组结构末尾是否添加逗号 <es5|none|all>
  trailingComma: "none",
  // 对象首尾需要空格（对象、数组）
  bracketSpacing: true,
  // 标签的闭合是否换行
  bracketSameLine: false,
  // jsx 标签的闭合是否换行(2.4.0 已废除)
  // jsxBracketSameLine: false,
  // 箭头函数参数是否添加括号(单个参数) <always|avoid>
  arrowParens: "avoid",
  // 指定格式化文件的部分内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 限制为只格式化头部注释中包含 @prettier 的文件
  requirePragma: false,
  // 在文件头部插入一个特殊的 @format标记，指定该文件已使用pretttier进行了格式化
  insertPragma: false,
  // 内容折行方式 <always|never|preserve>
  proseWrap: "preserve",
  // 指定HTML文件的全局空格敏感度 <css|strict|ignore>
  htmlWhitespaceSensitivity: "css",
  // 是否缩进Vue文件中<script>和<style>标签内的代码
  vueIndentScriptAndStyle: false,
  // 指定行结尾换行符风格 <lf|crlf|cr|auto>
  endOfLine: "lf",
  // 指定是否尝试格式化嵌入的代码 <auto|off>
  embeddedLanguageFormatting: "auto",
  // 在HTML、Vue和JSX中强制每行单个属性
  singleAttributePerLine: false
};
