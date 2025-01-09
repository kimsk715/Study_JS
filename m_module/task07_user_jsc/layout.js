const userLayout = (() => {
    const userList = (users, userLenghth, inputNum) => {
        const message = document.querySelector("#message");
        const table = document.getElementById("users");

        // 입력한 번호와 사용자 숫자를 체크해서 메세지 출력
        let text = ``;
        if (userLenghth < inputNum) {
            // 오류가 났을 때 테이블을 안보이게 숨김
            table.style.display = "none";
            text = `<span style="color : red"><strong>입력한 ID보다 크거나 같은 ID를 가진 사용자는 없습니다..</strong></span>`;
            message.innerHTML = text;
            return;
        } else {
            // 오류가 났을 때 숨겨졌던 테이블을 다시 보이게 함
            table.style.display = "table";
            text = `<span style="color : red"><strong>입력한 ID보다 크거나 같은 ID를 가진 사용자 목록입니다.</strong></span>`;
            message.innerHTML = text;
        }

        text = `<tr><th class = "id">사용자 ID</th><th class = "name">이  름</th><th class = "city">주거지</th><th class = "phone">전화번호</th></tr>`;
        users.forEach(({ id, name, address: { city }, phone }) => {
            if (id % 2 == 0) {
                text += `<tr class="even"><td class = "id">${id}</td><td class = "name">${name}</td><td class = "city">${city}</td><td class = "phone">${phone}</td></tr>`;
            } else {
                text += `<tr class="odd"><td class = "id">${id}</td><td class = "name">${name}</td><td class = "city">${city}</td><td class = "phone">${phone}</td></tr>`;
            }
        });

        table.innerHTML = text;
    };

    return {
        userList: userList,
    };
})();
