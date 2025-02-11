var client_height;
var client_width;
function position_frontpage(){
  //client_height*=9/8;
  $("#front_page").height(client_height);
  $("#torque_man").height(client_height/2).css("margin-top",client_height/40+"px");
  $("#torque_title").css("font-size",client_height/13.85+"px");
  $("#torque_tagline").css("font-size",client_height/50+"px").css("margin-top",client_height/30+"px");
  $("#torque_date").css("font-size",client_height/25+"px").css("margin-top",client_height/45+"px");
  $("#brochure_link_frontpage").css("margin-top",client_height/20+"px").css("font-size",client_height/40+"px").css("padding",client_height/150+"px").css("width",$("#brochure_link_frontpage_link").width()+30);
    //client_height*=8/9;
}


function position_first_whiteblock(){
  $("#about_us_heading").css("margin-top",client_height/30).css("font-size",client_height/20);
   $("#about_us_matter").css("margin-top",client_height/40).css("font-size",client_height/50);
  $(".breaker").css("margin-top",client_height/20);
    $("#torque_15_heading").css("margin-top",client_height/30).css("font-size",client_height/20);
     $("#torque_15_matter").css("margin-top",client_height/45).css("font-size",client_height/50).css("margin-bottom",client_height/30);
     $("#gallery_heading").css("margin-top",client_height/30).css("font-size",client_height/20);
     $("#gallery_matter").css("margin-top",client_height/45).css("font-size",client_height/50).css("margin-bottom",client_height/30);
 }
function position_second_whiteblock(){
  $("#why_sponsor_us_heading").css("margin-top",client_height/30).css("font-size",client_height/20);
   $("#why_sponsor_us_matter").css("margin-top",client_height/40).css("font-size",client_height/50);
  $(".breaker").css("margin-top",client_height/20);
    $("#previous_sponsors_heading").css("margin-top",client_height/30).css("font-size",client_height/20);
     $("#previous_sponsors_matter").css("margin-top",client_height/45).css("margin-bottom",client_height/30);
}
function position_events(){
  var block_height=client_height*0.3;
  $(".row").css("height",client_height*0.33);
  $(".event_image").css("height",client_height/8).css("margin-top",block_height/8);
  $(".event_heading").css("font-size",client_height/25).css("margin-top",block_height/25);
  $('.events_white_block').hover(function() {
    $(this).animate({opacity: 1}, 400);
}, function() {
    $(this).animate({opacity: 0.9}, 400);
})
}

function position_contactus(){
  $("#contact_us_heading").css("margin-top",client_height/30).css("font-size",client_height/20).css("margin-bottom",client_height/30);
  $("#contact_us").css("height",$("#contact_us").height()+100);
  $("#tas_card").css("background-image","url('images/tas.jpg')");
  $("#fadil_card").css("background-image","url('images/fadil.jpg')");
  $("#iswarya_card").css("background-image","url('images/iswarya.jpg')");
  $("#robinson_card").css("background-image","url('images/robinson.jpg')");
  $("#pranav_card").css("background-image","url('images/pranav.jpg')");
  $("#vishnu_card").css("background-image","url('images/vishnu.jpg')");
  $("#sekhar_card").css("background-image","url('images/sekhar.jpg')");
  $("#athil_card").css("background-image","url('images/athil.jpg')");
  $("#meljo_card").css("background-image","url('images/meljo.jpg')");
  $("#renjith_card").css("background-image","url('images/ranjith.jpg')");
  $('.contact_info').hover(function() {
    $(this).animate({opacity: 0}, 400);
}, function() {
    $(this).animate({opacity: 0.7}, 400);
})
}

function position_sidebar(){
  $("#sidebar").css("font-size",client_height/30);
  $("#torque_sidebar").css("margin-bottom",client_height/20).css("margin-top",client_height/15).css("height",client_height/6);
  $(".breaker_sidebar").css("margin-bottom",client_height/50).css("margin-top",client_height/50);
  $("#Download_Brochure").css("font-size",client_height/30);
}
function position_everything(){
  //FOR MOBILES FIX height
  position_frontpage();
  position_first_whiteblock();
  position_events();
  position_second_whiteblock();
  position_contactus();
  position_topbar();
  position_sidebar();
  position_description();
}

function position_topbar(){
  $("#brochure_link_topbar").css("font-size",25).css("height","51px");
  $("#the_nasty_pipe").css("left",$("#brochure_link_topbar").outerWidth());
  $("#menu_topbar").css("right",50).css("top",7);
}


function position_description(){
  $("#description_heading").css("margin-top",client_height/20).css("font-size",client_height/10);
  $("#description_matter").css("margin-top",client_height/30).css("font-size",client_height/40);
  $("#description_image").css("height",client_height/2);
}
