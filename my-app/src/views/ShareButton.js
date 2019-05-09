import React from 'react'
import { Facebook, Twitter,} from 'react-sharingbuttons';
import 'react-sharingbuttons/dist/main.css';

const ShareButton = () => {
    const url = 'https://github.com/caspg/react-sharingbuttons'
    const shareText = 'Check this site!'

    return (
        <div className="fb-share-button"
                 data-href="https://www.your-domain.com/your-page.html"
                 data-layout="button_count">
        </div>
    )
}



export default ShareButton;
