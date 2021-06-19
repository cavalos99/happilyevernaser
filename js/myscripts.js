document.cookie = "witcher=Geralt; SameSite=None; Secure"
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("modalImg");
for(var i=0; i<img.length; i++){
var modalImg = document.getElementById("img01");
img[i].addEventListener('click',function(){
    modal.style.display = "block";
    modalImg.src = this.src;
})
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
//
// $(".weddingPartyButton").focusin(function(){
//     $('.weddingPartyButton').css('color',''); // Remove Before set color to selected button
//     $(this).css("color", "red"); // Set Color to Selected Button
// });

function myFunction(elem) {
  // var x = document.getElementById("bridesmaids");
  // var description = elem.getAttribute('bridesmaids');
  // x.innerHTML = description;

  var button = document.getElementsByClassName('weddingPartyButton');

  for (var i = 0; i < button.length; i++) {
    button[i].classList.remove('active-weddingPartyButton');
  }

  elem.classList.add('active-weddingPartyButton');
}

$('body').on('click', '[data-toggle="tab"]', function(e) {
  e.preventDefault();
  // Select our target
  var $target = $($(this).data('target'));
  // Hide all tabs
  $('.tab-contents .tab').removeClass('active');
  // Show only $target tab
  $target.addClass('active');
});
