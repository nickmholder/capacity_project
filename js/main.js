//*****IMPORTANT***** These functions are a temporary solution for FRONT END ONLY. They will break once on BACK END./
//This function imports the header from header.html and puts it on any page using <div header-html="header.html"></div>
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("header-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("header-html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
    changeTitle();
    activeMenu();
};

//Function for id="title". Will change title based on <title></title>
function changeTitle() {
    var theTitle = document.title;
    $('h1#title').text(theTitle);
};

//Function for whichever page you are on that page is highlighted the selected orange
function activeMenu() {
    var url = window.location.href.split("/");
    $(`a[href$="${url.pop()}"]`).addClass('active');
}


//Function for the info button tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//Function for datepicker 1 and 2
$(function() {
    $('#datetimepicker1').datetimepicker();
    $('#datetimepicker2').datetimepicker();
    $('#datetimepicker3').datetimepicker();
    $('#datetimepicker4').datetimepicker();
    $('#datetimepicker5').datetimepicker();
});


//Function for uploading document
$(function(){
    $("#upload_link").on('click', function(e){
        e.preventDefault();
        $("#upload:hidden").trigger('click');
    });
});

$('input[type=file]').change(function(){
    var filename = $(this).val().split('\\').pop();
    var idname = $(this).attr('id');
    console.log($(this));
    console.log(filename);
    console.log(idname);
    $('span.'+idname).next().find('span').html(filename);
});

// Billing different than shipping address 

function valueChanged() {
    
    if($('#checkboxInput8').is(":checked"))   
        $(".billing-shipment").show();
    else
        $(".billing-shipment").hide();
}

// $('.show-all-detail').on('click', function(e){
//     $( ".arrow-left" ).addClass( "show-all-detail-active" );
// });