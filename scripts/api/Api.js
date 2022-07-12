/**
 * @async informations from the Json file
 * @file  data/photographers.json
 * @description the function getPhotographers is called in the .\scripts\pages\index.js and .\scripts\pages\photographer.js files
 */
function getPhotographers() {
	return fetch("data/photographers.json")
		.then((res) => res.json())
		.then((photographers) => photographers)
		.catch((err) => console.log("Failed to load photographers data " + err));
}