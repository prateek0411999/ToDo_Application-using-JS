// //alert('Connected');


// var h=document.createElement('h1');
// var myValue= document.createTextNode('Hello World!')


// //here we have made our h1 tag 
// // and the content for it i.e. Hello world!
// //now this is how we'll put it inside that tag
// //using the appendChild 
// //fir apan iss tag ko apne index.html file k h1 tag se append krdenge saame appendChild method

 

// h.appendChild(myValue);
// document.querySelector('h1').appendChild(h)

//isko apan use krege
var addButton=document.getElementById('add')
addButton.addEventListener('click',addItem)

var removeButton=document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

function addItem(){
    var input=document.getElementById('input')
    var item=input.value
    ul=document.getElementById('list')
    var textnode=document.createTextNode(item) //apan ne  text grab krlia 
    if(item==='')
    {
        return false;
    }else{
        //create li
        li=document.createElement('li')
        //create checkbox
        var checkbox=document.createElement('input')
        checkbox.type='checkbox';
        checkbox.setAttribute('id','check')
                                //key value
        //create label
        var label=document.createElement('label');
        label.setAttribute('for','item');

        //add these element on webpage
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);


        //ab insert krdege jaha krna hh
        ul.insertBefore(li,ul.childNodes[0])

    
    }

}

function removeItem(){
    li=ul.children
    for(let i=0;i<li.length;i++)
    {
        while(li[i] && li[i].children[0].checked)
        {
            ul.removeChild(li[i])
        }
    }
}