(function(){

  console.log("it's alive");

  var state = {
    mobileCdn: '',
    desktopCdn: '',
    alt: ''
  }

  // Desktop
  //cdn.notonthehighstreet.com/fs/79/5f/9fbd-2534-4060-a03f-7730d5aeec0a/original_skinny-banner-fathers-day-graphic-24-05-2016.jpg


  // Mobile
  //cdn.notonthehighstreet.com/fs/c1/01/e23b-8d64-4b5e-8f17-f3b374078935/original_mob-skinny-banner-fathers-day-graphic-24-05-2016.jpg

  var cdn_desktop = document.getElementById('desktop_cdn');
  var cdn_mobile = document.getElementById('mobile_cdn');
  var alt_text = document.getElementById('alt_text');
  var myresult = document.getElementById('result');
  var mycode = document.getElementById('code');

  var src_desktop = document.getElementById("edit_desktop_scr");
  var src_mobile = document.getElementById("edit_mobile_scr");


  // Var for markup
  var html_open = "&lt;div class='module_container'&gt;"+ "<br/>" + "&nbsp;&lt;div class='content_block_module content_module_has_mobile_image'&gt;" + "<br/>";
  
  var html_close = "<br/>" + "&nbsp;&lt;/div&gt;" + "<br/>" + "&lt;/div&gt;";

  $("#desktop_cdn").change( function(){
    state.desktopCdn = cdn_desktop.value;
    showMyResult();
  })

  $("#mobile_cdn").change( function(){
    showMyResult();
  })

  //Add alt text and title text
  $("#alt_text").change( function(){
    state.alt = alt_text.value;
    showMyResult();
  })

  // build html for desktop image

  function desktopImageHtml (){
    html_image = "&nbsp; &nbsp; &lt;img id='edit_mobile_scr' class='mobile_only mobile_banner' alt='" + state.alt + "' title='shop curated gift collections' data-lazy-load-for-media='mobile' data-lazy-load-event='immediately' data-pin-nopin='true' src='" + state.desktopCdn + "'&gt;";
    
  }
  


  function showMyResult (){
    
    desktopImageHtml();

    $("#code").html("<pre>" + html_open + html_image + html_close + "</pre>");

    src_desktop.src = "https:" + cdn_desktop.value;


    // console.log(cdn_mobile.value);
    // $("#code").html("<div class='alert-box success'><p><b>URL:</b> " + cdn_mobile.value + "</p></div>");
    // src_mobile.src = "https:" + cdn_mobile.value;
  }




})();