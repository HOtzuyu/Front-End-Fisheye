class MediaFactory {
    constructor(media) {
        if (media.image) {
            return new Photo(media);
        } else {
            return new Video(media);
        }
    }
}