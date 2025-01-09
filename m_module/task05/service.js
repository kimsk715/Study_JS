const photoService = (() => {
    const getPhotos = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/photos"
        );
        const photos = await response.json();
        if (callback) {
            return callback(photos);
        }
    };

    return { getPhotos: getPhotos };
})();
