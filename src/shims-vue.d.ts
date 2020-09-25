declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}

// 告诉 ts .md 文件是个字符串，避免 router.ts 内引用 md 文件标红
declare module '*.md' {
  const str: string
  export default str
}