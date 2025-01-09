const photoLayout = (() => {
    const showPhotos = (photos) => {
        const Table = document.getElementById("table");
        let text = ``;
        // console.log(Input.value);
        photos.forEach(({ title, url }) => {
            let check = title.includes(Input.value);
            // 이름이나 이메일 중 한 곳에라도 키워드가 있으면 검색되도록 함.
            text += `<tr>
            <td ${check && "class='on'"}>${title}</td>
            <td ${
                check && "class='on'"
            } <a href="https://www.naver.com"><img src="${url}"></a></td></tr>`;
        });
        Table.innerHTML = text;
    };

    return { showPhotos: showPhotos };
})();
