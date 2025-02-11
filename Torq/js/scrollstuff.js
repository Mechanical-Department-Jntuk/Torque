
function show_topbar(){
  $("#topbar").fadeIn();
  position_topbar();
}
function hide_topbar(){
  $("#topbar").fadeOut();
}
function move_menu_down(){
  $("#menu_topbar").css("top",50).css("right",75);
}
function move_menu_up(){
  $("#menu_topbar").css("top",7).css("right",50);
}
function scroll_manager(){
  if(scrollY>client_height){
    show_topbar();
    move_menu_up();
  }
  else{
    hide_topbar();
    move_menu_down();
  }
}
var sidebar_in=0;
var button_active=0;
function close_menu(){
  if(sidebar_in==1){
    $("#sidebar").toggleClass("sidebar_in");
    $("#dimmer").fadeOut();
    sidebar_in=0;
  }
}
function show_menu() {
  // Toggle sidebar visibility
  $("#sidebar").toggleClass("sidebar_in");
  
  // Show dimmer
  $("#dimmer").fadeIn();
  
  // Set sidebar state
  sidebar_in = 1;
  
  // Remove previous click handlers to prevent multiple bindings
  $("#dimmer").off('click').on('click', function() {
      close_menu();
  });
}

function close_menu() {
  if (sidebar_in === 1) {
      $("#sidebar").removeClass("sidebar_in");
      $("#dimmer").fadeOut();
      sidebar_in = 0;
  }
}

function take_me_to(position){
  var curtop=0;
  console.log("Position:"+position);
  if(position==1){                //FRONT PAGE
      curtop=0;
  }
  else if(position==2){           //ABOUT US
      curtop+=client_height;
  }
  else if(position==3){           //GALLERY
curtop+=client_height+$("#about_us_heading").height()+$("#about_us_matter").height()+$("#tathva_15_heading").height()+$("#tathva_15_matter").height()+client_height*1/20;
  }
  else if(position==4){           //EVENTS
        curtop=client_height+$("#first_white_block").height();
  }
  else if(position==5){           //WHY US
curtop=client_height+$("#first_white_block").height()+$("#events").height();
  }
  else if(position==6){           //PREVIOUS SPONSORS
curtop=client_height+$("#first_white_block").outerHeight()+$("#events").height()+$("#why_sponsor_us").outerHeight()+$(".breaker").outerHeight()+80;
  }
  else if(position==7){           //CONTACT US
curtop=client_height+$("#first_white_block").height()+$("#events").height()+$("#second_white_block").height()+150;
  }
  else if(position==8){           //DOWNLOAD BROCHURE
window.location.href="brochure.pdf";
}
  console.log("Moving to "+curtop);
  $('html,body').animate({
               scrollTop: curtop
          }, 1000);
   close_menu();
}

function open_description(content_id){
  var heading="Tathva '16";
  var matter="Welcome";
  if(content_id==1){
      heading="Events";
      matter="<p>To truly achieve one's best potential, one needs a stage that draws out their inner Edison. Replete with events that reach unprecedented heights year after year, Tathva '16 is just that stage. Tathva '16, a cornucopia of the pioneering technological minds of the country, is where you find events that inspire, and outcomes that revolutionize. We invite you to showcase your brand, in this techno- festival and reach out to an audience both large and diverse.</p>";
  }
  else if(content_id==2){
    heading="Lectures";
    matter="<p>Ever since the inception of Tathva, we've held impeccably organized workshops and world class lectures that have since become synonymous with our image. Our stage has witnessed pioneers like Dr A.P.J. Abdul Kalam, former president of India, Dr G Madhavan Nair, former chairman of ISRO, and Jimmy Wales, founder of Wikipedia, enthrall the audience with their brilliance and direction. Providing a completely hands-on approach, our technical workshops ranging from ethical hacking to RC aircrafts have been voted top-notch.</p><p>This Tathva's lectures and workshops bring you the exclusive opportunity to place your brand in the limelight with an enviable audience exposure.</p>";
  }
  else if(content_id==3){
    heading="Workshops";
    matter="<p>Ever since the inception of Tathva, we've held impeccably organized workshops and world class lectures that have since become synonymous with our image. Our stage has witnessed pioneers like Dr A.P.J. Abdul Kalam, former president of India, Dr G Madhavan Nair, former chairman of ISRO, and Jimmy Wales, founder of Wikipedia, enthrall the audience with their brilliance and direction. Providing a completely hands-on approach, our technical workshops ranging from ethical hacking to RC aircrafts have been voted top-notch.</p><p>This Tathva's lectures and workshops bring you the exclusive opportunity to place your brand in the limelight with an enviable audience exposure.</p>";
  }
  else if(content_id==4){
    heading="Exhibitions";
    matter="<p>Time and again, Tathva has continuously provided a platform for young minds to experience and explore the technological advancements of today. Having showcased displays by renowned organizations like ISRO and DRDO in the previous years, Tathva '15 raised the bars by featuring Manav - India's first 3D printed humanoid robot. We also collaborated with UNESCO for the international year for light and hosted an exhibition on light based science.</p><p>This Tathva '16, we are back, bigger and better, with world-class exhibitions that will attract the biggest footfalls and ensure maximum visibility for our associates. Come join us, and be part of this technological extravaganza.</p>";
  }
  else if(content_id==5){
    heading="Aavishkar";
    matter="<p>At this fiesta of technical delicacy and creative exuberance, Aavishkar is an endeavor by NITCians where students and other enthusiasts come together and join hands to contribute towards the society.</p><p>Aavishkar is a humble effort to make Tathva not just a techno-management fest but also a service that can uplift and enable our community to evolve and pilot towards a better tomorrow.</p><br><p>Join us at Tathva and do your bit for this noble cause.</p>";
  }
  else if(content_id==6){
    heading="Adizya";
    matter="<p>Tathva renders not just a dais for technical dexterity, but an equally amazing juncture for the artistic intellects to shine through. A brilliant manoeuvre started by the architecture students of NIT-C, Adizya, within its short span, has augmented the power of imagination and innovation to the quintessence of creative publicity. Adizya '15 entertained a large audience by hosting interactive sessions by renowned architects Dean D'Cruz and Eugene Pandala, and the accomplished artist Jinan K B, along with the inventive workshops.</p><p>This Adizya'16 gives you the opportunity to make yourself a prominent brand among the young creative minds of the country who shall soon adorn the cape of the future consumers.</p>";
  }
  else if(content_id==7){
    heading="Wheels";
    matter="<p>Does the revving of a car engine get you all fired up? Does the sight of supercars give you goosebumps?</p><p>Wheels is your place to be at Tathva '16. Presenting the best modified cars from South India all under one tent, Wheels ushers in one of the biggest gatherings of motor heads in India. A dream come true to all automotive maniacs, Wheels has always been able to attract large audiences with its jaw-dropping array of automobiles. Car aficionados from all over India visit NITC just to feel the rush of these grand machines. Wheels is one of the most frequented events during Tathva every year and this display of chrome and power grows snazzier with each edition. Gear up for one of the biggest rides of Tathva ’16.</p>";
  }
  else if(content_id==8){
    heading="Proshows";
    matter="<p>Tathva Nites, a perfect blend of culture and art, attracting an audience of over 8000 spectators every year, has become synonymous with grandeur. It creates a platform for talented national and international artists, promising tremendous participation from the biggest crowds in South India, which in turn ensures brand visibility and builds brand image. The crowds witness history in the making as performers of the likes of Motherjane, Agam, and Candice Redding set fire to the stage at the NITC open air theatre. Be a part of a spectacle as this cultural celebration transforms an ordinary night into an unforgettable, enthralling experience.</p>";
  }
  else if(content_id==9){
    heading="Samasya";
    matter="<p>Tathva, known to be a quintessential platform for showcasing talent, brings yet another magnificent event - Samasya, conducted by NIT-C's Enquire Quiz Club.</p><p>It features a brain battle extravaganza which helps ignite young minds and fuel curiosity. Being Kerala's biggest school quiz, Samasya witnesses around 800 school students from across 10 districts over the state brainstorming their way through a plethora of quizzical questions. Students compete for a cash prize of Rs. 25,000 and the crowning glory of emerging victorious after battling it out against the most voracious quizzers in the state.</p>";
  }
  else if(content_id==10){
    heading="Bizpark";
    matter="<p>Tathva '16 brings to you an idiosyncratic event Bizpark to discover the tycoons of tomorrow's business world. Bizpark pushes contestants to break free and surpass the limits of imagination, innovation, and logic. Be a part of an event where like-minded, business-wired brains compete on a national level to demonstrate that they are the creme de la creme when it comes to management. NIT-C gives you a splendid opportunity to interact and associate with the marketing maestros of tomorrow.</p>";
  }
  else if(content_id==11){
    heading="Blitzkrieg";
    matter="<p>The glory of battle, the nail-biting dash to the finish line, Tathva ’16 brings you the next level of gaming with Blitzkrieg. Prepare yourself for the onslaught as some of the most accomplished gaming aficionados battle it out for cash prizes worth over 1.5 lakhs.</p><p>But maybe that’s not you. For those who prefer mind-boggling riddles over blood and gore, for those of you who rip questions to shreds, Clueless is just the game for you. With a fan following of over 10k, this online treasure hunt is unlike anything you've seen before.</p>";
  }
  else if(content_id==12){
    heading="Informals";
    matter="<p>All it takes is a glimpse to bring strangers together. A rush of adrenaline. A peal of laughter.</p><p>Besides setting up a witty banter amongst the crowds and creating memories, TathvaOnthespot guarantees truckloads of entertainment, and for associates, a wave of ears and eyes for your brand.</p><p>See it awaken your inner madcap and seize the moment while it lasts. Grab your chance to become our Informals partner and let the crowds be an audience to your brand.</p>";
  }

  $("#description_heading").html(heading);
  $("#description_matter").html(matter);
  $("#description_image").attr("src","images/"+heading+".jpg");
  document.getElementById("description_image").onload=function(){
    $("#description_panel").fadeIn();
    $("#contents").fadeOut();
    $("#menu_topbar").fadeOut();
    position_description();
    setTimeout(function(){$('html,body').animate({
                 scrollTop: 0
            }, 1000);},100);
  };

}
function close_description(){
  $("#contents").fadeIn();
  $("#menu_topbar").fadeIn();
  $("#description_panel").fadeOut();
  take_me_to(4);
}
$(document).ready(function(){
  client_height=screen.height;
  client_width=screen.width;
  position_everything();
  setTimeout(function(){$("#dimmer").fadeOut();window.scrollTo(0,1);},3000);
  document.addEventListener("mousewheel", scroll_manager, true);
  setInterval(function(){scroll_manager()},100);
});
document.addEventListener('scroll', function() {
  var sections = document.querySelectorAll('#about_us, #gallery, #events');
  
  sections.forEach(section => {
    var position = section.getBoundingClientRect();
    
    if(position.top < window.innerHeight * 0.8) {
      section.classList.add('scroll-animate');
    }
  });
});
