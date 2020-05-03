---
title: Youtube watch later list deleter
path: /portfolio/youtube-watch-later-deleter
date: 2019-11-17T16:30:00.000Z
isImageFile: true
images: /src/images/youtubedel.jpg
video: 'https://www.youtube.com/embed/qFkhoADhhGA'
link: 'https://github.com/lydstyl/191117-youtubeWatchLaterDeleter'
---
Comment supprimer votre liste YouTube de vidéos à regarder plus tard avec JavaScript ?

Je vous explique comment vider votre liste de vidéos YouTube à regarder plus tard à l'aide du script ci-dessous.

Update du 03/05/2020: utilisez uniquement la façon la plus simple via copié-collé du script mis à jour ci-dessous dans la console de votre navigateur. Je ne maintiens pas l'extension de Chrome.

```
function clickFirstVideo() {
  document
    .querySelector('.style-scope ytd-playlist-video-renderer button')
    .click();
}

function clickDeleteButton() {
  const menuWithSeparator = document.querySelector(
    'paper-listbox [has-separator_]+ytd-menu-service-item-renderer'
  );

  if (menuWithSeparator) {
    menuWithSeparator.click();
  } else {
    document
      .querySelector('paper-item .style-scope.yt-formatted-string')
      .click();
  }
}

setInterval(() => {
  clickFirstVideo();
  clickDeleteButton();
}, 100);
```
