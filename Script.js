
const starterPosts = [
  {
    id: 1,
    name: "Amara N.",
    handle: "@amara.creates",
    time: "12 min ago",
    text: "Your ideas deserve room to grow. What are you creating this week?",
    likes: 24,
    liked: false,
    comments: 6,
    art: "MAKE SPACE FOR IDEAS"
  },
  {
    id: 2,
    name: "Lebo M.",
    handle: "@lebomakes",
    time: "38 min ago",
    text: "Looking for creative people who love building new things!",
    likes: 18,
    liked: false,
    comments: 9,
    art: "BUILD IT TOGETHER"
  },
  {
    id: 3,
    name: "Jay K.",
    handle: "@jayexplores",
    time: "1 hr ago",
    text: "Discover something new and share your experiences.",
    likes: 42,
    liked: false,
    comments: 3,
    art: "DISCOVER SOMETHING NEW"
  }
];

let posts = JSON.parse(localStorage.getItem("vibePosts") || "null") || starterPosts;

const postList = document.getElementById("postList");
const toastEl = document.getElementById("toast");

function toast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");

  setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2200);
}

function save() {
  localStorage.setItem("vibePosts", JSON.stringify(posts));
}

function renderPosts(query = "") {
  const search = query.toLowerCase();

  const visible = posts.filter(post =>
    (post.text + post.name + post.handle)
      .toLowerCase()
      .includes(search)
  );

  postList.innerHTML = visible.map(post => `
    <article class="post-card" data-id="${post.id}">
      <div class="post-head">
        <div class="avatar">${post.name[0]}</div>

        <div class="post-person">
          <strong>${post.name}</strong>
          <small>${post.handle} · ${post.time}</small>
        </div>
      </div>

      <p class="post-copy">${post.text}</p>

      ${post.art ? `
        <div class="post-art">${post.art}</div>
      ` : ""}

      <div class="post-actions">
        <button class="post-action ${post.liked ? "liked" : ""}"
          data-action="like">
          ♡ ${post.likes} Likes
        </button>

        <button class="post-action" data-action="comment">
          ▢ ${post.comments} Comments
        </button>

        <button class="post-action" data-action="share">
          ↗ Share
        </button>
      </div>
    </article>
  `).join("") || "<p>No posts found.</p>";
}

renderPosts();

document.getElementById("composer").addEventListener("submit", event => {
  event.preventDefault();

  const input = document.getElementById("postText");
  const text = input.value.trim();

  if (!text) {
    toast("Write something before posting.");
    return;
  }

  posts.unshift({
    id: Date.now(),
    name: "You",
    handle: "@yourvibe",
    time: "Just now",
    text,
    likes: 0,
    liked: false,
    comments: 0,
    art: ""
  });

  save();
  renderPosts(document.getElementById("searchInput").value);

  input.value = "";
  toast("Your post was added!");
});

postList.addEventListener("click", event => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  const card = button.closest("[data-id]");
  const post = posts.find(p => String(p.id) === card.dataset.id);

  if (!post) return;

  if (button.dataset.action === "like") {
    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;
    save();
    renderPosts(document.getElementById("searchInput").value);
  }

  if (button.dataset.action === "comment") {
    toast("Comments are coming soon!");
  }

  if (button.dataset.action === "share") {
    toast("Sharing will be added soon!");
  }
});

document.getElementById("searchInput").addEventListener("input", event => {
  renderPosts(event.target.value);
});

function openComposer() {
  document.getElementById("postText").focus();
}

document.getElementById("openComposer").addEventListener("click", openComposer);
document.getElementById("mobileCreate").addEventListener("click", openComposer);

document.getElementById("themeButton").addEventListener("click", () => {
  document.body.classList.toggle("light");

  localStorage.setItem(
    "vibeLight",
    document.body.classList.contains("light")
  );
});

if (localStorage.getItem("vibeLight") === "true") {
  document.body.classList.add("light");
}

document.getElementById("addMoment").addEventListener("click", () => {
  toast("Moments are coming soon!");
});

document.getElementById("addMomentCard").addEventListener("click", () => {
  toast("Moments are coming soon!");
});

document.querySelectorAll("[data-view]").forEach(button => {
  button.addEventListener("click", () => {
    const view = button.dataset.view;
    toast(view === "world" ? "Welcome to Vibe World!" : view + " preview coming soon!");
  });
});

document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => {
    toast("Welcome to Vibe World!");
  });
});

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");
    toast("Feed filter selected!");
  });
});
