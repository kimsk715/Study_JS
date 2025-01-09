const userLayout = (() => {
    const showUsers = (users) => {
        const wrap = document.getElementById("user-list");
        let text = "";

        users.forEach(({ name, email, website }, index) => {
            const nameColor = name.includes("Mrs.") ? "purple" : "black";
            const lastRow = index === 9; // users.length - 1; ( 10 - 1;) 인덱스는 0~9 해야 10개.
            // const lastRowStyle = lastRow ? "background-color: gray;" : "";

            text += `
                <tr>
                    <td style="color: ${nameColor}; ${
                lastRow ? "background-color: gray;" : ""
            }">${name}</td>
                    <td style="${
                        lastRow ? "" : ""
                    }" onclick="this.style.color='red'">${
                email.length > 20 ? email.slice(0, 20) + "..." : email
            }</td>
                    <td style="cursor: pointer;${
                        lastRow ? "background-color: gray;" : ""
                    }" onclick="window.open('http://${website}')">${website}</td>
                </tr>
            `;
        });

        wrap.innerHTML = text;
    };

    return { showUsers: showUsers };
})();
