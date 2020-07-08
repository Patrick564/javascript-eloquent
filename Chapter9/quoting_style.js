let text = "'I'm he cook', he said, 'it's my job'.";

console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));