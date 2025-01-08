// 댓글 모듈 만들기
// 작성, 목록, 수정, 삭제

const replyService = () => {
    const write = (reply) => {
        // 서버에게 reply를 전달하는 코드가 들어갈 자리
        // reply는 id, content를 포함.
    };
    const getReplies = (page = 1, id, callback) => {
        // 댓글 목록 페이지번호를 받고, 댓글 목록을 반환.
        const replies = [];
        if (callback) {
            callback();
        }
    };
    const update = (reply) => {};
    // id, 수정된 내용,
    // return 필요없음.
    const remove = (id) => {};
    // 제거할 id만 받아옴.
    // return 필요없음.
    return {
        write: write,
        getReplies: getReplies,
        update: update,
        remove: remove,
    };
};
