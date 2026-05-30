'use client'

import linkedinLogo from "../../assets/linkedin_logo.jpg";
import githubLogoLarge from "../../assets/github_logo_large.jpg";
import gmailLogo from "../../assets/gmail_logo.png";
import ClickableCard from '../clickableCard/clickableCard';

const ConnectContents = () => {
    return (
        <div className="grid grid-cols-3 gap-4 p-4 justify-items-center mt-30">
            <ClickableCard image={linkedinLogo} text={'Add me on LinkedIn'} url={'https://www.linkedin.com/in/benjamin-yan-b499b185/'} />
            <ClickableCard image={githubLogoLarge} text={'Follow me on GitHub'} url={'https://github.com/benyan8211'} />
            <ClickableCard image={gmailLogo} text={'Send me an email'} url={'mailto:benyan8211@gmail.com'}/>
        </div>
    );
}

export default ConnectContents;