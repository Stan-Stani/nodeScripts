const originalString = process.argv[2]

function toCamelCase(str) {
  // The regex pattern /(?:^\w|[A-Z]|\s\w)/g matches:
  // ^\w: the first word character in the string.
  // [A-Z]: any uppercase letter.
  // \s\w: a space followed by a word character.
  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\s\w)/g, (character, index) => {
      return index === 0
        ? character.toLowerCase()
        : character.trim().toUpperCase()
    })
    .replace(/\s+/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "")
}


function toKebabCase(str) {
  this.timesStartedCallbackForKebabCase = 0
  // The regex pattern /(?:^\w|[A-Z]|\s\w)/g matches:
  // ^\w: the first word character in the string.
  // [A-Z]: any uppercase letter.
  // \s\w: a space followed by a word character.
  const computedStr = str
    .trim()
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\s\w)/g, (character, index) => {
      ++timesStartedCallbackForKebabCase

      const lowerCaseCharacter = character.toLowerCase().trim()
      if (index === 0) {
        return lowerCaseCharacter
      }
      return `-${lowerCaseCharacter}`
    })
    .replace(/\s+/g, "")
  return computedStr
}

console.log(toCamelCase(originalString))

console.log(toKebabCase(originalString))
