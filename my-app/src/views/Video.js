import {ReactVideoPlay, VideoSourceType} from 'react-video-play';
import {VideoSourceType} from 'react-video-play';

<ReactVideoPlay
    sources={src}
    poster="http://lorempixel.com/900/450/people/"
    advComponent={<UIVideoAdvTest/>}
    enableSlider={true}
    sliderSlides={slides}
    autoplay={true}
    muted={true}
/>

interface Source {
    name: string,
default?: boolean,
        source: VideoSource[]
}

enum VideoSourceType{
    video_mp4,
        video_webm,
        video_ogg
}

interface VideoSource {
    source: string,
        type: VideoSourceType,
        codecs?: string
}


let src = [
    {
        name: '1080p',
        source: [{
            source: 'https://www.youtube.com/watch?v=_ovdm2yX4MA',
            type: VideoSourceType.video_mp4
        }]
    }, {
        name: '720p',
        default: true,
        source: [{
            source: 'https://www.youtube.com/watch?v=_ovdm2yX4MA',
            type: VideoSourceType.video_mp4
        }]
    }
];

interface VideoSliderSlide {
    img: string,
        link: string
}

slides: [
    {
        img: "http://lorempixel.com/100/75/people/",
        link: "http://video.egorov.pw",
    },
    {
        img: "http://lorempixel.com/100/75/city/",
        link: "http://video.egorov.pw",
    }
]