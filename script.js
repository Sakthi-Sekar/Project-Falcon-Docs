// <!--JS for read external html file-->

$(".banner").each(function() {
    console.log('working');
    var inc = $(this);
    $.get(inc.attr("title"), function(data) {
        inc.replaceWith(data);
    });
});

// <!-- JS for OPEN CONTENT TAB-->

function openTab(evt, Name) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    //To scroll back to the default top position

    tabcontent.scrollTop = window.scrollTo(0, 0);

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById(Name).style.display = "block";

} // Get the element with id="defaultOpen" and click on it

document.getElementById("defaultOpen").click();

// <!--JS for ACCORDION-->

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("accordion-down");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


// <!--JS for modal images zoom-->

var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function showImg(obj) {
    var arrows = document.getElementsByClassName("zoom");
    console.log(arrows.length)
    for (var i = 0; i < arrows.length; i++) {
        if (obj == arrows[i]) {
            modal.style.display = "block";
            modalImg.src = arrows[i].src;
            captionText.innerHTML = arrows[i].alt;
        }
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = "none";
        }
    }
}


// <!--JS for ADD ACTIVE CLASS TO THE CURRENT BUTTON-->

// Add active class to the current button (highlight it)
var header = document.getElementById("tabActive");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}

//JS for scroll to top button

//Get the button
var mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        document.getElementById("fixed-header").classList.add("headerClass");
    } else {
        mybutton.style.display = "none";
        document.getElementById("fixed-header").classList.remove("headerClass");
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//JS for Coming soon page

// Set the date we're counting down to
var countDownDate = new Date("Apr 17, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

//JS for redirecting into another page

function myFunction() {
    //location.replace("html files/ui-project structure/config.html")
    window.open('html files/ui-project structure/config.html', '_blank');
}

//JS for read more & Read less button

function readMoreLess() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("Btn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        btnText.scrollIntoView(0, 0);


    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        btnText.scrollIntoView(0, 0);
    }
}

// JQUERY for READ MORE AND LESS BUTTON

$(document).on("click", ".toggle-text-button", function() {

    if ($(this).text() == "Read More") {
        $(this).text("Read Less");

        // Use a jquery selector using the `.attr()` of the link
        $("#toggle-text-" + $(this).attr("toggle-text")).slideDown();
        $('body').scrollTo('#toggle-text-'); // Scroll screen to target element

    } else {
        $(this).text("Read More");
        // Use a jquery selector using the `.attr()` of the link
        $("#toggle-text-" + $(this).attr("toggle-text")).slideUp();

    }

});

//Alert box implementation

function alertBox() {
    alert("Do not refresh the page.\n Sit back and relaxed");


}

//Sign up/in

// Get the modal
var form = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == form) {
        modal.scrollTop = window.scrollTo(0, 0);
        modal.style.display = "none";

    }
}

//Refresh Control
//this code handles the F5/Ctrl+F5/Ctrl+R
document.onkeydown = checkKeycode

function checkKeycode(e) {
    var keycode;
    if (window.event)
        keycode = window.event.keyCode;
    else if (e)
        keycode = e.which;

    // Mozilla firefox
    if ($.browser.gecko) {
        if (keycode == 116 || (e.ctrlKey && keycode == 82)) {
            if (e.preventDefault) {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    }
    // IE
    else if ($.browser.msie) {
        if (keycode == 116 || (window.event.ctrlKey && keycode == 82)) {
            window.event.returnValue = false;
            window.event.keyCode = 0;
            window.status = "Refresh is disabled";
        }
    }
}