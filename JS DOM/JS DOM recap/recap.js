/* 
1. how to use html and css
2. get element or elements from dom
    2-1: elementBYID
    2-2: elementsByClassname
    2-3: querySelector  -- 
    2-3: querySelectorAll
3. dynamically add element to to the DOM : createElement
    3-5: Set value to the innerHTML
4. get and set value from/to a DOM element
    4-5: use innertext (h1, p, h5, div, span, strong)
    4-6: use value (input, textArea)
5. Add event lister (event handler)
    5-1. click, focus, blur, onchange, keyup
    5-2. addEventListner onclick="myHandler()"

6. use function to reduce duplicate code
7. event bubble and event delegate
*/

//  find all tags under class
document.querySelectorAll('.users-container .disable h3')
document.querySelectorAll('.my-users li')