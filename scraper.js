function scrape( url, selector ){


  
fetch( url )
  .then(response => {
    // When the page is loaded convert it to text
    return response.text()
  })
  .then(html => {
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

let box = document.getElementById( 'textbox');
Box.innerHTML = content;

} 
