---
title: Youtube watch later list deleter
path: /portfolio/youtube-watch-later-deleter
date: 2019-11-17T16:30:00.000Z
img: 'https://i.ytimg.com/vi/VM_GuERfihs/maxresdefault.jpg'
video: 'https://www.youtube.com/embed/P9OglayxKkU'
link: 'https://github.com/lydstyl/191117-youtubeWatchLaterDeleter'
---
Comment supprimer votre liste YouTube de vidéos à regarder plus tard avec JavaScript

Je vous explique comment vider votre liste de vidéos YouTube à regarder plus tard à l'aide d'un script JavaScript à copier coller dans votre navigateur :

```
setInterval(() => {
  document
    .querySelector('.style-scope ytd-playlist-video-renderer button')
    .click();

  document
    .querySelectorAll('.style-scope ytd-menu-service-item-renderer')[2]
    .click();
}, 100);
```
