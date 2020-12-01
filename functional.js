let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return 'https://example.com/' + string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// function that takes in the states variable and returns an array of URLs of the form https://example.com/<urlified form>

function statesToUrl(elements) {
  return elements.map(element => urlify(element));
}
console.log(statesToUrl(states));

// singles: Impreative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// doubles: Functional version
function functionalDoubles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalDoubles(states));

// dakotas: Functional version
function functionalDakotas(elements) {
  return elements.filter(element => element.includes('Dakota'));
}
console.log(functionalDakotas(states));