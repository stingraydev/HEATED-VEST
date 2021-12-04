//timer

const hour = document.querySelectorAll('.offer__timer-num--hours');
const minute = document.querySelectorAll('.offer__timer-num--minutes');
const second = document.querySelectorAll('.offer__timer-num--seconds');

let time = new Date();
let next = new Date(60 * 60 * 24 * 1000 + time.getTime());
next.setHours(0, 0,0,0,);
let realtime = next - new Date();

function timeRender(el, data) {
  for (var i = 0; i < el.length; i++) {
    el[i].innerHTML = data > 9 ? data : '0' + data;
  }
}


let timer = setInterval( ()=> {
  realtime = next - new Date();
  const hours =  Math.floor(((realtime / 1000 /60 /60) % 24));
  const minutes = Math.floor(((realtime / 1000  /60) % 60));
  const seconds = Math.floor(((realtime / 1000) % 60));
  timeRender(hour, hours);
  timeRender(minute, minutes);
  timeRender(second, seconds);
}, 1000);

document.addEventListener('DOMContentLoaded', function () {
    var videos = Array.from(document.querySelectorAll('.video_autoPlay')).map(function (video) {
        return [video, {
            isVideoPlay: false
        }];
    });
    var allVideosDone = false;
    document.body.addEventListener('click', function () {
        if (allVideosDone) return;
        videos.forEach(function (videoState) {
            if (!videoState[1].isVideoPlay) {
                videoState[1].isVideoPlay = true;
                videoState[0].play();
            }
        });
        allVideosDone = videos.every(function (videoState) {
            return videoState[1].isVideoPlay;
        });
    });
});

$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true
  });

  let controlsInfo = document.querySelectorAll('.slider .slick-dots li');
  for (var i = 0; i < controlsInfo.length; i++) {
    let itemText = controlsInfo[i].innerText;
    controlsInfo[i].innerText = itemText + '/5';
  }
});

$('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });