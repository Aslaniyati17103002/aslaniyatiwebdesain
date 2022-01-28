//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}
<script type="text/javascript">

$(function(){

$("#accordion").accordion();
});
</script>

</head>
<body>
<div id="accordion">

<h3><a href="#">Bootstrap</a></h3>

<div>

Ini Bootstrap Lorem ipsum, dolor sit amet consectetur adipisicing elit.

</div>

<h3><a href="#">JQuery</a></h3>

<div>

Ini Jquery Lorem, ipsum dolor sit amet, consectetur adipisicing elit.

</div>

<h3><a href="#">Html CSS</a></h3>

<div>

Ini HTML dan CSS Lorem, ipsum, dolor sit amet consectetur adipisicing elit.

</div>
<script type="text/javascript">
$(function(){

$("#dialogku").dialog({
autoOpen:false,
show:'blind',
hide:'explode'

});
$('#idbuka').click(function(){

$('#dialogku').dialog('open');
return false;

});

});
</script>

</head>
<body>
<div id="dialogku" title="Basic Dialog">

<p>Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Voluptas voluptates odit

vel totam Untuk menghapus tekan tombol x</p>
</div>
<button id="idbuka">Buka Dialog</button>
</body>
</div>
</body>

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        } else {
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
}); 
