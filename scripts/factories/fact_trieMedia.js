/**
 * @class filtered if it an image or a video
 * @description use on the photographer's page
 */
class MediaFactory {
	constructor(media) {
		if (media.image) {
			return new Photo(media);
		} else {
			return new Video(media);
		}
	}
}