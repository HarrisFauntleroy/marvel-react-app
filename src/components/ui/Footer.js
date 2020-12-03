import React from 'react'
import { ReactComponent as GithubLogo } from '../../icons/github-brands.svg'

export const Footer = () => {
    return (
        <footer>
            <span><a href="https://developer.marvel.com/">Data provided by Marvel &copy; {new Date().getFullYear()}</a> <a href="https://github.com/HarrisFauntleroy/marvel-react-app">View on Github <GithubLogo /></a></span>
        </footer>
    )
}

export default Footer