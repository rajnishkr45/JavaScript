// DOM => Documnent Object Model

// Document.GetElementById("");
// Document.GetElementByClassName("");
// InnerText => Gives only visible content ( texts ).
// InnerHTML => Gives all the visible content along with html tags and all.
// InnerContent => Selects or gives all the content even if it is hidden by css.
// Document.queryselector(""); => Can select every content ( one at a time )
// Document.querySelectorAll(""); => Gives all selected items but we cannot directly use any property as it gives nodelist. so we can use for each or array method 

let ulList = Document.querySelectorAll("li");

ulList.array.forEach(function (l) {
    l.style.color = "Red";
})