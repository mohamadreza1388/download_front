$(function () {
    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:3,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:7
            }
        }
    })
    $(".tab").hide()
    $(".cat_btn:nth-child(1)").addClass('active')
    show_tab()
    $(".cat_btn").click(function () {
        $(this).addClass("active").siblings(".cat_btn").removeClass("active")
        show_tab()
    })
    function show_tab() {
        let data = $(".cat_btn.active").attr("tab_name")
        $(`div[tab_name=${data}`).fadeIn(500).siblings(".tab").fadeOut(0)
    }
})