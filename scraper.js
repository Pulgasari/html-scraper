function startScraper( ){

  console.log('success – in function');

  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
let url = document.getElementById('url').value || 'https://google.com';
let selector = document.getElementById('selector').value || 'body';

  console.log( proxyUrl + url );
  console.log(selector);
  
fetch( URL, {
  mode: 'no-cors',
  headers: {
      'Access-Control-Allow-Origin' : '*'
  }
})
  .then(response => {
    // When the page is loaded convert it to text
    return response.text()
  })
  .then(html => {
    console.log('success – in fetch then');
    
    // Initialize the DOM parser
    const parser = new DOMParser()

    // Parse the text
    const doc = parser.parseFromString(html, "text/html")

    // 
    const content = doc.querySelector( selector ).innerHTML

    textarea( content);
    //console.log(doc)
  })
  .catch(error => {
     console.error('Failed to fetch page: ', error)
  })

} 

function textarea( content ){

  console.log('success – in textarea() function');

let box = document.getElementById( 'textbox');
box.innerHTML = content || 'fail';

} 
