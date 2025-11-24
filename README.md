# HubCloud Link Extractor

A web application that extracts direct download links from HubCloud and GDFlix URLs.

## Features

- ✅ **HubCloud.foo** support - Extracts FSL Server, HubCDN, Google Drive, Pixeldrain, Mega Server, and Cloudflare Workers links
- ✅ **HubCloud.one/drive/** support - Full support for drive links
- ✅ **GDFlix.dev** support - Extracts Instant DL and Pixeldrain links with multi-layer redirect unwrapping
- 🎨 Modern, responsive UI with dark theme
- ⚡ Fast extraction with automatic redirect following

## Supported Link Types

### HubCloud Links
- `hubcloud.foo/video/*` - Video links
- `hubcloud.one/drive/*` - Drive links

### GDFlix Links
- `gdflix.dev/file/*` - File links

## Extracted Download Servers

- **FSL Server** (Direct with dynamic timestamp)
- **HubCDN** (10Gbps)
- **Google Drive** (Direct download)
- **Pixeldrain** (Direct API download)
- **Mega Server**
- **Cloudflare Workers** (Direct)
- **Instant DL** (10Gbps with multi-layer unwrapping)

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_GITHUB_REPO_URL)

1. Click the "Deploy with Vercel" button
2. Connect your GitHub account
3. Deploy!

### Local Development

1. Clone the repository:
```bash
git clone YOUR_REPO_URL
cd hubdrive-backup
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the application:
```bash
python app.py
```

4. Open your browser and navigate to `http://localhost:5000`

## How It Works

1. **Input**: Paste a HubCloud or GDFlix URL
2. **Processing**: The app fetches the page, follows redirects, and extracts download links
3. **Output**: Direct download links from multiple servers

### Extraction Logic

- **HubCloud**: Fetches the page → Finds `gamerxyt.com` intermediate link → Extracts all download server links
- **GDFlix**: Fetches the page → Follows `instant.busycdn.cfd` redirect → Unwraps `filesgram.site` → Unwraps `fastcdn-dl.pages.dev` → Gets final `googleusercontent.com` link

## Tech Stack

- **Backend**: Python Flask
- **Frontend**: HTML, CSS, JavaScript
- **Deployment**: Vercel

## License

MIT License

## Author

Built with ❤️ using Antigravity AI
