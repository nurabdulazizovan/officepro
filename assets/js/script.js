$('.stat-number').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        step: function (func) {
            $(this).text(parseFloat(func).toFixed(size));
        }
    });
});
$(document).ready(function(){
   let x=  $("input[name ='address']")
   if ( ! x.is(':checked') ){
    $(".submit-basket").attr("disabled", true);
    $(".submit-basket").addClass("disabled")
}
   $(x).click(function(){
    
     $(".submit-basket").removeAttr("disabled");
     $(".submit-basket").removeClass("disabled")
    $(".delivery-notification").hide();
    console.log(x.is(':checked'));
   })
     

})
$(document).ready(function(){
    $(".add-new").click(function(){
        $(".address-shadow, .add-address").show();
    })
})
$(document).ready(function(){
    $(".address-shadow, .close-address").click(function(){
        $(".address-shadow, .add-address").hide();
    })
})
$(document).ready(function(){
    $(".cart-link").click(function(){
        $(this).siblings().show();
        $(this).hide();
    })
})
$(document).ready(function(){
    $(".noncart").click(function(){
        $(this).siblings().show();
        $(this).hide();
    })
})
$(document).ready(function(){
    $(".nonlike").click(function(){
        $(this).siblings().show();
        $(this).hide();
    })
})
$(document).ready(function(){
    $(".like").click(function(){
        $(this).siblings().show();
        $(this).hide();
    })
})
const inputElements = [...document.querySelectorAll('input.code-input')]

inputElements.forEach((ele,index)=>{
  ele.addEventListener('keydown',(e)=>{
    if(e.keyCode === 8 && e.target.value==='') inputElements[Math.max(0,index-1)].focus()
  })
  ele.addEventListener('input',(e)=>{
    const [first,...rest] = e.target.value
    e.target.value = first ?? ''
    const lastInputBox = index===inputElements.length-1
    const insertedContent = first!==undefined
    if(insertedContent && !lastInputBox) {
      inputElements[index+1].focus()
      inputElements[index+1].value = rest.join('')
      inputElements[index+1].dispatchEvent(new Event('input'))
    }
  })
})
$(document).ready(function(){
    $(".close").click(function(){
        $(".accountBox, .verificationContainer, .forgetBox, .shadow-category").hide();
    })
})
$(document).ready(function(){
    $(".account").click(function(){
        $(".accountBox,.accountFormContainer, .shadow-category").show();
    })
})
$(document).ready(function(){
    $(".send").click(function(){
        $(".verificationContainer").show();
        $(".forgetBox").hide();
    })
})
$(document).ready(function(){
    $(".forget-link").click(function(){
        $(".accountFormContainer").hide();
        $(".forgetBox").show();
    })
})

$(document).ready(function(){
    $(".loginshow").click(function(){
        $(".accountFormContainer").show();
        $(".forgetBox").hide();
    })
})

jQuery(document).ready(function() {

    $('input').on('blur', function() {
            if (!$(this).val())
                $(this).removeClass('hascontent');
            else
                $(this).addClass('hascontent');
    });
    
});
            
$(document).ready(function() {
    $('.nav-tabs > li > a').click(function(event) {
    event.preventDefault();
    var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');
    var actived_nav = $('.nav-tabs > li.active');
    actived_nav.removeClass('active');
    $(this).parents('li').addClass('active');
    $(active_tab_selector).removeClass('active');
    $(active_tab_selector).addClass('hide');
    var target_tab_selector = $(this).attr('href');
    $(target_tab_selector).removeClass('hide');
    $(target_tab_selector).addClass('active');
    });
});

$(document).ready(function(){
    $(".search-input").click(function(){
        $(".searchBox form").css("border", "1px solid #eb804e");
        $(".search-result, .shadow-category").show();
    })
})
$(document).ready(function(){
    $(".search-input").blur(function(){
        $(".searchBox form").css("border", "1px solid #CACACA");
        $(".search-result, .shadow-category").hide();
    })
})

$(document).ready(function(){
    $(".mainlink").click(function(){
        $(".category-detail").slideToggle()
        $(".shadow-category").toggle()
    })
})
$(document).ready(function(){
    $(".shadow-category").hover(function(){
        $(".category-detail,.shadow-category,.search-result").hide();
        $(".searchBox form").css("border", "1px solid #cacaca");
    })
})
$('.owl-brands').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            dots: true
        },
        600:{
            items:4,
        },
        1000:{
            items:8,
        }
    }
})
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[3000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})