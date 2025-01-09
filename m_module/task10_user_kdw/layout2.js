const userLayout = (() => {
    const showUsers = (users) => {
        const wrap = document.getElementById("user-list");
        let text = "";

        users.forEach(({ name, email, website }, index) => {
            const emailDisplay =
                email.length > 20 ? email.slice(0, 20) + "..." : email;
            const startWithmrs = name.startsWith("Mrs.") ? "start-mrs" : "";
            const lastRow = index === users.length - 1;

            text += `
                <tr class="${lastRow ? "last-row" : ""}">
                    <td class="${startWithmrs}">${name}</td>
                    <td class="email-long" onclick="this.style.color='red'">${emailDisplay}</td>
                    <td><a href="http://${website}" target="_blank">${website}</a></td>
                </tr>
            `;
        });

        wrap.innerHTML = text;
    };

    return { showUsers: showUsers };
})();
