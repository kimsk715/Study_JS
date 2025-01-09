const infoLayout = (() => {
    const showInfo = (users) => {
        const table = document.getElementById("info");

        let text = ``;

        users.forEach(({ address, id }) => {
            console.log(address.zipcode.charAt(0));
            text += `
                <tr ${address.zipcode.charAt(0) == 5 && "class='yellow'"}>
                    <td>${id}</td>
                    <td>${JSON.stringify(address)}</td>
                </tr>
            `;
        });
        table.innerHTML = text;
    };
    return {
        showInfo: showInfo,
    };
})();
