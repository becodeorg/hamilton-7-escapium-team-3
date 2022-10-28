const header_img = document.querySelector(".header_content-carousel");
console.log (header_img);
let i = 0;
// Header carousel changes images every 10 seconds
setInterval(function(){  
    header_img.children.forEach((img,i) =>{
        header_img.children = 'none';
    })

    if ( i == header_img.length){
        i = 0;
    }
    header_img.children[i].style.display = 'block';
    // i++;
    console.log('I run every 2 seconds indefinitely');
}, 10000);