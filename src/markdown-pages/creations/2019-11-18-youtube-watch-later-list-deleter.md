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

function clickItemButtonList() {
  document
    .querySelector('.style-scope ytd-playlist-video-renderer button')
    .click();
}

function inListButtonClick(buttonNumber) {
  document
    .querySelectorAll('.style-scope ytd-menu-service-item-renderer')
    [buttonNumber - 1].click();
}

function is3ButtonList() {
  if (
    document.querySelectorAll('.style-scope ytd-menu-service-item-renderer')
      .length === 3
  )
    return true;
  return false;
}

setInterval(() => {
  clickItemButtonList();

  is3ButtonList() ? inListButtonClick(3) : inListButtonClick(1);
}, 200);
```
