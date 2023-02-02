export interface paragraph {
  id: string;
  text: string;
}

export interface heading1 {
  id: string;
  text: string;
}

export interface heading2 {
  id: string;
  text: string;
}

export interface heading3 {
  id: string;
  text: string;
}

export interface quote {
  id: string;
  text: string;
}

type Lang =
  | 'markup'
  | 'bash'
  | 'clike'
  | 'c'
  | 'cpp'
  | 'css'
  | 'javascript'
  | 'jsx'
  | 'coffeescript'
  | 'actionscript'
  | 'css-extr'
  | 'diff'
  | 'git'
  | 'go'
  | 'graphql'
  | 'handlebars'
  | 'json'
  | 'less'
  | 'makefile'
  | 'markdown'
  | 'objectivec'
  | 'ocaml'
  | 'python'
  | 'reason'
  | 'sass'
  | 'scss'
  | 'sql'
  | 'stylus'
  | 'tsx'
  | 'typescript'
  | 'wasm'
  | 'yaml';

export interface code {
  id: string;
  text: string;
  lang: Lang;
}

export interface equation {
  id: string;
  text: string;
}

export interface divider {
  id: string;
}
