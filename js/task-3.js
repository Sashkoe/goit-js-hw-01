function getElementWidth (content,padding,border ) {
    const contentWidht = Number.parseFloat(content);
    const paddingWidht = Number.parseFloat(padding);
    const borderWidht = Number.parseFloat(border);
    const totalWidht = contentWidht +  paddingWidht * 2 + borderWidht *2;
    return totalWidht; 
}
console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 