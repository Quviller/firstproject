document.getElementById('btn-get').addEventListener('click',sendGet,false);


function sendGet (e){
    e.preventDefault();
    if ( !$('#email').val() ) {
        alert('Please provide your CV to access CV');
        return;
    } 
        
    $.ajax({
    url: "https://formspree.io/didukhroman@gmail.com", 
    method: "POST",
    data: {
        message: "Hello! Your CV was just seen by:",
        email: $('#email').val(),
    },
    dataType: "json"
});
window.open('https://docs.google.com/document/d/1igmzPrNCYB6w0vtqrhri-Zq1kczuuMzJd2rmFMOzaZc/edit?usp=sharing');

}


