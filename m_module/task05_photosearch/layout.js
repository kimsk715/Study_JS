const photoLayout = (() => {
    const showPhotos = (photos) => {
        const Table = document.getElementById("table");
        let text = ``;

        photos.forEach(({ title, id, thumbnailUrl,url }) => {
            let check = title.includes(Input.value);
          
            text += `<tr>
            <td ${check && "class='on'"}>${id}</td>
            <td ${check && "class='on'"}>${title}</td>
            <td ${
                check && "class='on'"
            } ><a href="${url}", target ="_blank"><img src=${thumbnailUrl}></a></td></tr>`;
        });
        Table.innerHTML = text;
    };

    return { showPhotos: showPhotos };
})();
