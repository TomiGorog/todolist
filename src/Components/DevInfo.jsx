import React from 'react'
import { DevInfoFooter, FooterIconDiv } from '../Styles/Container.style'
import { FooterLink, FooterP, PortfolioLink } from '../Styles/Fonts.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function DevInfo() {
    return (
        <DevInfoFooter>
            <FooterP>Todolist practice project by:</FooterP>
            <PortfolioLink href="https://tgdev.vercel.app/">Tamas Gorog</PortfolioLink>
            <FooterIconDiv>
                <FooterLink href="https://www.linkedin.com/in/tamas-gorog-354369177/" target='_blank'><FontAwesomeIcon className='footerIcon' icon={faLinkedin} /> </FooterLink>
                <FooterLink href="mailto:tamas.peter.gorog@gmail.com" target='_blank'><FontAwesomeIcon className='footerIcon' icon={faEnvelope} /></FooterLink>
                <FooterLink href="https://github.com/TomiGorog" target='_blank'><FontAwesomeIcon className='footerIcon' icon={faGithub} /></FooterLink>
            </FooterIconDiv>
        </DevInfoFooter>
    )
}

export default DevInfo