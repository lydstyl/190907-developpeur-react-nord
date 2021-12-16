import React from "react"
import styled from "styled-components"
// import QRCode from "react-qr-code";

const Img = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    max-height: 144px;
    margin: 0 10px;
  }
`

export const QRContactMe = () => {
  // Generated with https://goqr.me/

  return (
    <Img
      src="http://api.qrserver.com/v1/create-qr-code/?color=000000&amp;bgcolor=FFFFFF&amp;data=BEGIN%3AVCARD%0AVERSION%3A2.1%0AFN%3AGabriel+Brun%0AN%3ABrun%3BGabriel%0ATEL%3BHOME%3BVOICE%3A0781154503%0AEMAIL%3BHOME%3BINTERNET%3Alydstyl%40gmail.com%0AURL%3Awww.developpeur-react-nord.com%0AADR%3A%3B%3B%3B%3B%3B%3BFrance%0AEND%3AVCARD%0A&amp;qzone=1&amp;margin=0&amp;size=400x400&amp;ecc=L"
      alt="QR code Développeur React Nord"
      title="VCARD, mes coordonnées sont aussi en bas de page."
    />
  )
}
