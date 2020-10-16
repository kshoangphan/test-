window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav-catology");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

var owlbanner = $('#banner-carousel>.owl-carousel');
owlbanner.owlCarousel({
        loop:true,
        autoplay: true,
        items:1,
        margin: 10,
        autoplayHoverPause:true,
    }
);

var owlytb = $('#owl-ytb>.owl-carousel');
owlytb.owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    items:2,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        601:{
            items:2,
            nav:false
        },
        769:{
            items:2,
            nav:false
        },
        993:{
            items:2,
            nav:true,
        },
        1600:{
            items:2, nav:true,
            loop:true,
        }
    }
});

var owl = $('.owl-carousel');
owl.owlCarousel({

    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        601:{
            items:2,
            nav:false
        },
        769:{
            items:3,
            nav:false
        },
        993:{
            items:4,
            nav:true,
        },
        1600:{
            items:5,
            nav:true,
            loop:true,
        }
    }
});