"""Serve the built site locally, including its custom 404 page."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


SITE_ROOT = Path(__file__).resolve().parent / "_site"


class PortfolioHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(SITE_ROOT), **kwargs)

    def send_error(self, code, message=None, explain=None):
        if code != 404:
            return super().send_error(code, message, explain)

        page = (SITE_ROOT / "404.html").read_bytes()
        self.send_response(404)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(page)))
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(page)


if __name__ == "__main__":
    if not (SITE_ROOT / "404.html").is_file():
        raise SystemExit("Build the site before running the preview: bundle exec jekyll build")
    print("Preview at http://localhost:8765", flush=True)
    ThreadingHTTPServer(("127.0.0.1", 8765), PortfolioHandler).serve_forever()
