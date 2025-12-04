// --------------------------------------
// YouTube API Setup
// --------------------------------------
const apiKey = "YOUR_API_KEY_HERE";   // <--- replace this only
const channelId = "UCwxiilmw1w9xKjIU35hsmOQ";

// Pulls the latest 12 videos from the Uploads playlist
const apiURL = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=12`;

// --------------------------------------
// Fetch videos
// --------------------------------------
fetch(apiURL)
    .then(res => res.json())
    .then(data => {
        const videos = data.items;

        if (!videos || videos.length === 0) return;

        // Latest video = first video
        const latest = videos[0];
        const latestId = latest.id.videoId;

        // Put latest video on the page
        document.getElementById("latest-video").innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${latestId}" 
                frameborder="0" 
                allowfullscreen>
            </iframe>
        `;

        // Other videos (skip the first one)
        const othersContainer = document.getElementById("other-videos");

        videos.slice(1).forEach(video => {
            if (!video.id.videoId) return;

            const vid = video.id.videoId;

            const iframe = `
                <iframe
                    src="https://www.youtube.com/embed/${vid}"
                    frameborder="0"
                    allowfullscreen>
                </iframe>
            `;

            const div = document.createElement("div");
            div.innerHTML = iframe;

            othersContainer.appendChild(div);
        });
    })
    .catch(err => {
        console.error("YouTube API Error:", err);
    });
