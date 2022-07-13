/**
 * @class filtered if it an image or a video
 * @description use on the photographer's page
 */
class MediaFactory {
	constructor(media) {
		return media.image ? new Photo(media) : new Video(media);
	}
}