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
// Paste all this code in your console when you are in your Watch later list page and press enter if you whant to delete it

function clickFirstVideo() {
  document
    .querySelector('.style-scope ytd-playlist-video-renderer button')
    .click();
}

function clickDeleteButton() {
  document
    .querySelector(
      'path[d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"]'
    )
    .parentElement.parentElement.parentElement.click(); // a lot of parentElement but it is difficult to select the correct button without it
}

setInterval(() => {
  clickFirstVideo();
  clickDeleteButton();
}, 100);
```
