$(function () {
    function getCookie(cookie_name) {
        var name = cookie_name + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "null";
    }

    function changeTheme(data) {
        document.cookie = `Theme=${data};max-age=86400`;
        if (data === "dark") {
            $(":root").css({
                "--color1": "#082032",
                "--color2": "#142736",
                "--color3": "#132635",
                "--color4": "#0E2334",
                "--color5": "#8A9AA7",
                "--color6": "rgba(0, 0, 0, 0.43)",
                "--color7": "#30414F",
                "--color8": "#1E313F",
                "--shadow": "0 0 30px 0px rgb(0 0 0 / 5%)",
                "--shadow2": "0 0 20px -8px #bc8971",
                "--shadow3": "0 0 25px -5px #bc8971",
            })

            $("span[class*=icon]").addClass("text-[--color5]")
            $(".fallow").addClass("text-white")
            $("hr").addClass('my-op')
            $(".group").children("a").removeClass("bg-[#E8F1F8]").addClass("bg-[#152F43]")
            $(".group").children("a").children("div").children("div.items-center").addClass("bg-[#163955]")
            $(".comment").removeClass("border").addClass("my-border")

        } else if (data === "light") {
            $(":root").css({
                "--color1": "#F9FDFF",
                "--color2": "#FFFFFF",
                "--color3": "#F7F2F0",
                "--color4": "#DDC4B8",
                "--color5": "#BC8971",
                "--color6": "rgba(0, 0, 0, 0.43)",
                "--color7": "#f1f4f4",
                "--color8": "#F1F3F4",
                "--shadow": "0 0 30px 0px rgb(0 0 0 / 5%)",
                "--shadow2": "0 0 20px -8px #bc8971",
                "--shadow3": "0 0 25px -5px #bc8971",
            })
            $("span[class*=icon]").removeClass("text-[--color5]")
            $(".fallow").removeClass("text-white")
            $(".group").children("a").addClass("bg-[#E8F1F8]").removeClass("bg-[#152F43]")
            $(".group").children("a").children("div").children("div.items-center").removeClass("bg-[#163955]")
        }
    }

    let bodyTheme = getCookie("Theme")

    if (bodyTheme === "null") {
        bodyTheme = "dark"
    }

    $("body").attr("theme", bodyTheme)

    $(".moon-btn").click(function () {
        let nowTheme = $(this).attr("data")
        $("body").attr("theme", nowTheme)
        if (nowTheme === "light") {
            $(".moon-btn").attr("data", "dark")
        } else {
            $(".moon-btn").attr("data", "light")
        }
        changeTheme(nowTheme)
    })

    changeTheme(bodyTheme)


    $('.owl-carousel').owlCarousel({
        rtl: true, loop: true, margin: 3, nav: false, responsive: {
            0: {
                items: 1
            }, 600: {
                items: 3
            }, 1000: {
                items: 7
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

    $(".search-btn").click(function () {
        $(".search-overlay").fadeIn(300)
        $(".search-box").removeClass("pos-hidden-top").addClass("top-10")
    })
    $(".search-overlay").click(function () {
        $(".search-overlay").fadeOut(300)
        $(".search-box").addClass("pos-hidden-top").removeClass("top-10")
    })
    $(".search-close").click(function () {
        $(".search-overlay").fadeOut(300)
        $(".search-box").addClass("pos-hidden-top").removeClass("top-10")
    })
    $(".accordion.active").children(".acc-content").slideDown(300)
    $(".accordion").click(function () {
        $(this).addClass("acc-active").children(".acc-content").slideToggle(300)
    })
})