let posts = [
    {
      name: "Post 1",
      id: 1,
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et suscipit nulla. Ut bibendum nisl velit, volutpat sodales lorem ornare eget. Mauris in risus pellentesque, auctor velit vel, bibendum orci. In eget aliquet orci, in dictum neque. Nam a ante ac odio vehicula aliquam. Fusce faucibus arcu vel ornare posuere.",
      data: "12/05/1995",
    },
    {
      name: "Post 2",
      id: 2,
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et suscipit nulla. Ut bibendum nisl velit, volutpat sodales lorem ornare eget. Mauris in risus pellentesque, auctor velit vel, bibendum orci. In eget aliquet orci, in dictum neque. Nam a ante ac odio vehicula aliquam. Fusce faucibus arcu vel ornare posuere.",
      data: "10/31/2000",
    },
    {
      name: "Post 3",
      id: 3,
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et suscipit nulla. Ut bibendum nisl velit, volutpat sodales lorem ornare eget. Mauris in risus pellentesque, auctor velit vel, bibendum orci. In eget aliquet orci, in dictum neque. Nam a ante ac odio vehicula aliquam. Fusce faucibus arcu vel ornare posuere.",
      data: "07/22/2003",
    },
    {
      name: "Post 4",
      id: 4,
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et suscipit nulla. Ut bibendum nisl velit, volutpat sodales lorem ornare eget. Mauris in risus pellentesque, auctor velit vel, bibendum orci. In eget aliquet orci, in dictum neque. Nam a ante ac odio vehicula aliquam. Fusce faucibus arcu vel ornare posuere.",
      data: "09/01/1997",
    },
    {
      name: "Post 5",
      id: 5,
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et suscipit nulla. Ut bibendum nisl velit, volutpat sodales lorem ornare eget. Mauris in risus pellentesque, auctor velit vel, bibendum orci. In eget aliquet orci, in dictum neque. Nam a ante ac odio vehicula aliquam. Fusce faucibus arcu vel ornare posuere.",
      data: "01/27/1998",
    },
  ];
  
  export function getPosts() {
    return posts;
  }

  export function getPost(id) {
    return posts.find(
      (post) => post.id === id
    );
  }

  export function deletePost(id) {
    posts = posts.filter(
      (post) => post.id !== id
    );
  }