// fetch JSON
fetch("json/qoute.json").then(function(resp) {
    return resp.json();
}).then(function(data) {

    // generate random index for img
    let genr = Math.floor(Math.random() * data.pic.length);

    // get img
    console.log(data.pic);
    document.getElementsByClassName('img-fluid')[0].src = data.pic[genr].url;
    
    // reload img
    const btn = document.getElementsByTagName('button')[0];
    btn.addEventListener('click', function() {
    
    // generate random index for img
    let change = Math.floor(Math.random() * data.pic.length);
    document.getElementsByClassName('img-fluid')[0].src = data.pic[change].url;
    console.log(change);
    });

});