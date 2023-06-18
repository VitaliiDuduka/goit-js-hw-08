import _throttle from 'lodash.throttle';

      const iframe = document.querySelector('iframe');
      const player = new Vimeo.Player(iframe);


player.on('timeupdate', _throttle(saveVideoProgress, 1000) );
        
function saveVideoProgress(event) {
    localStorage.setItem('videoplayer-current-time', event.seconds);
}

window.onload = () => {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
};


