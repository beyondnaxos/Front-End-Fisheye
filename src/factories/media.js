import ImageMedia from "../views/images.view.js"
import VideoMedia from "../views/videos.view.js"

export default function factory(data){
    if (data.image){
        return new ImageMedia(data)
    }else {
        return new VideoMedia(data)
    }
}

