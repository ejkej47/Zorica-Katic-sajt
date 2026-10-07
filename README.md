# Zorica Katić website

The Next.js frontend reads published blog posts from the existing WordPress REST API. The WordPress admin remains the editor: sign in at `/wp-admin`, create a post, and publish it. The frontend refreshes its cached post list every 60 seconds. If WordPress cannot be reached, it uses the WordPress export in `src/data/wordpress.json` as a fallback.

WordPress already stores the posts in its own database, so this setup does not need a second database for the blog. To point the site to another WordPress installation, copy `.env.example` to `.env.local` and set `WORDPRESS_URL`.

Run locally with `npm run dev` and open <http://localhost:3000>.

Courses, paid access, and lesson permissions are not implemented yet. Those will need secure access control and a payment provider; we can decide later whether WordPress should manage that content too or whether to add a separate course platform.
