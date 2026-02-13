const container = document.getElementById("blogContainer");
const filterInput = document.getElementById("filterInput");
const Recent = document.getElementById("Recent");

function renderBlogs(data) {
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<p>No blogs found.</p>";
    return;
  }

  data.forEach((blog) => {
    const card = document.createElement("div");
    card.className = "card mb-3";

    card.innerHTML = `
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${blog.image}" class="img-fluid" alt="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${blog.title}</h5>
              <p class="card-text">${blog.excerpt}</p>
              <p class="card-text">
                <small class="text-muted">By ${blog.author} • ${blog.date}</small>
              </p>
              <a href="blog.html?id=${blog.id}" class="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      `;
    container.appendChild(card);
  });
}

// Initial render
renderBlogs(blogs);

// Filter logic (by ANY object key)
filterInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();

  const filteredBlogs = blogs.filter((blog) =>
    Object.values(blog).some((value) =>
      String(value).toLowerCase().includes(query)
    )
  );

  renderBlogs(filteredBlogs);
});

blogs.map((blog) => {
  const recentCard = document.createElement("div");
  recentCard.className = "card";
  recentCard.innerHTML = `
  <div class="row g-0">
          <div class="col-md-4">
            <img src="${blog.image}" class="img-fluid" alt="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${blog.title}</h5>
              <p class="card-text">${blog.excerpt}</p>
              <p class="card-text">
                <small class="text-muted">By ${blog.author} • ${blog.date}</small>
              </p>
              <a href="blog.html?id=${blog.id}" class="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      `;

  Recent.appendChild(recentcard);
});
