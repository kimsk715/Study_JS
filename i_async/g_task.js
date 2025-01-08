// const postService = (() => {
//     const getPosts = async (userId, callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts"
//         );
//         const posts = await response.json();

//         if (callback) {
//             return callback(userId, posts);
//         }
//     };
//     return { getPosts: getPosts };
// })();

// const getMyposts = (userId, posts) => {
//     return posts.filter((post) => post.userId === userId);
// };

// const printMyposts = async () => {
//     const myPosts = await postService.getPosts(5, getMyposts);
//     myPosts.forEach(({ userId, id }) => console.log(userId, id));
// };

// printMyposts();

// const photoService = (() => {
//     const getPhotos = async (albumId, callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/photos"
//         );
//         const photos = await response.json();

//         if (callback) {
//             return callback(albumId, photos);
//         }
//     };
//     return { getPhotos: getPhotos };
// })();

// const getMyphotos = (albumId, photos) => {
//     return photos.filter(
//         (photo) => photo.albumId === albumId && photo.id >= 60
//     );
// };

// const printPhotos = async () => {
//     const myPhotos = await photoService.getPhotos(2, getMyphotos);
//     console.log(myPhotos);
// };

// printPhotos();

// 유저 정보에서 특정 id를 가진 사람의 소속 회사명 알아내기
// const userService = (() => {
//     const getDatas = async (id, callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );
//         const users = await response.json();
//         if (callback) {
//             return callback(id, users);
//             // return 빼먹지 말자
//         }
//     };
//     return { getDatas: getDatas };
// })();

// const getMydatas = (id, users) => {
//     return users
//         .filter((user) => user.id === id)
//         .map((user) => user.company.name);
//     // .forEach((user) => user.name);
// };

// const printDatas = async () => {
//     const myDatas = await userService.getDatas(5, getMydatas);
//     console.log(myDatas);
// };

// printDatas();

// todos 에서 completed = false 인 자료들.
// const checkService = (() => {
//     const getTodos = async (callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/todos"
//         );
//         const todos = await response.json();
//         if (callback) {
//             return callback(todos);
//         }
//     };
//     return { getTodos: getTodos };
// })();

// const getMytodos = (todos) => {
//     return todos.filter((todo) => todo.completed == false);
// };

// const printTodos = async () => {
//     myTodos = await checkService.getTodos(getMytodos);
//     console.log(myTodos);
// };

// printTodos();
// 특정 회원의 completed = false 인 데이터를 id와 title만 출력하기.
const checkService = (() => {
    const getTodos = async (userId, callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos"
        );
        const todos = await response.json();
        if (callback) {
            return callback(userId, todos);
            //되도록이면 콜백으로 전달.
        }
    };
    return { getTodos: getTodos };
})();

const getMytodos = (userId, todos) => {
    return todos.filter(
        (todo) => todo.userId == userId && todo.completed == false
    );
};

const printTodos = async () => {
    myTodos = await checkService.getTodos(2, getMytodos);
    myTodos.forEach(({ id, title }) => console.log(id, title));
};

printTodos();

// 크게 fetch를 통해 데이터 가져오는 함수
// 특정 조건을 통해 필터 역할을 하는 함수
// 출력하는 함수
// callback을 통해 값을 넘겨주고 받음.
//
