import ImageMedia from "../views/images.view.js"
import VideoMedia from "../views/videos.view.js"

export default function factory(data) {
    if (data.image) {
        return new ImageMedia(data)
    } else {
        return new VideoMedia(data)
    }
}

export function factoryLB(url) {

    const urlArray = url.split('.')
    const splitResult = urlArray[urlArray.length - 1]

    if (splitResult === 'mp4') {
        return `<video class=" media-card media-video" width="300" height="300" controls>
                <source  src="${url}" type="video/mp4">
                Your browser does not support the video tag.
                </video>`

    } else {
        return `<img src="${url}" alt="">`


    }

}
