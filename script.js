function savePost() {
    let data = new FormData();
    data.append("title", title.value);
    data.append("content", content.value);
    data.append("tags", tags.value);
    data.append("date", date.value);

    fetch("save_post.php", {
        method: "POST",
        body: data
    }).then(() => loadPosts());
}

function loadPosts() {
    fetch("get_posts.php")
        .then(res => res.json())
        .then(data => {
            posts.innerHTML = "";
            data.forEach(p => {
                posts.innerHTML += `
                    <h3>${p.title}</h3>
                    <p>${p.content}</p>
                    <small>${p.tags} | ${p.published_date}</small>
                    <hr>
                `;
            });
        });
}

loadPosts();

