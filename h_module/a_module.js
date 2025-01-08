// 모듈화 : 유지보수하기 좋음.
// 하나로 합쳐져있던 코드들을 작은 단위로 분리하여
// 유지보수와 업데이트를 더 편하고 쉽게 하기 위한 작업.
// 한 개의 함수는 무조건 1개의 목적성을 가짐.

//선언과 사용을 동시에.
//리턴값을 사용하기 위한 것이므로, 함수의 이름은 필요없음.

// (function () {})();

// (function () {
//     return {
//         name : "한동석"
//         intro : (name) => {
//             console.log(name);
//         }
//     }
// })().intro("한동석");

// const getNumbers = function () {
//     function getOne() {
//         return 1;
//     }

//     function getTwo() {
//         return 2;
//     }
//     return {
//         getOne: getOne,
//         getTwo: getTwo,
//         // 각각 인덱스와 함수;
//     };
// };

// getNumbers.getOne;
// getNumbers.getTwo;

// 서버와 통신(CRUD)

const postService = () => {
    const write = (post) => {
        // 서버에게 post를 전달하는 코드가 들어갈 자리
    };
    const getList = (page = 1, callback) => {
        // 페이지 번호를 화면에서 요청.
        const posts = [];
        if (callback) {
            callback(posts);
            // 그 페이지의 게시물들을 반환
        }
    };
    const getPost = (id, callback) => {
        const post = {};
        if (callback) {
            callback(post);
        }
    };
    const update = (post) => {};
    const remove = (id) => {};
    return {
        write: write,
        getList: getList,
        getPost: getPost,
        update: update,
        remove: remove,
    };
};
// 화면으로부터 요청해야 될 것들과 return 해야되는 것들.
// reply : id, content,
postService.write; //
