const userLayout = (() => {
    const showUsers = (users) => {
        const Table = document.getElementById("table");
        let text = ``;
        console.log(Input.value);
        users.forEach(({ id, username, email }) => {
            let check =
                username.includes(Input.value) || email.includes(Input.value);
            // 이름이나 이메일 중 한 곳에라도 키워드가 있으면 검색되도록 함.
            text += `<tr>
            <td ${check && "class ='on'"}>${id}</td>
            <td ${check && "class ='on'"}>${username}</td>
            <td ${check && "class ='on'"}>${email}</td>
            </tr>`;
        });
        Table.innerHTML = text;
    };

    return { showUsers: showUsers };
})();
