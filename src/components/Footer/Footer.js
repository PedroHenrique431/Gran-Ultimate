import React from "react";
import {FaInstagram, FaFacebook, FaDiscord} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
  SocialIcons
} from "./FooterStyles";

function Footer() {
  return (
    <FooterContainer id="Contato">
      <FooterWrap>
        

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo> Gran_Ultimate </SocialLogo>
            <WebsiteRights>
              {" "}
              Gran_Ultimate © {new Date().getFullYear()} All rights reserved
            </WebsiteRights>

            <SocialIcons>
              <SocialIconLink href="https://www.instagram.com/granultimate.cdz/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
              <SocialIconLink href="https://discord.com/invite/V2UCNr5pjv" target="_blank" aria-label="Discord"><FaDiscord /></SocialIconLink>
              <SocialIconLink href="https://www.facebook.com/UnlimitedCDZ/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;