# HubCloud Link Extractor Implementation Plan

## Goal Description
Create a web application that takes a `hubcloud.foo` URL and extracts the direct download link(s) by following the redirect chain and parsing the intermediate pages.

## Proposed Changes

### Backend
#### [NEW] [app.py](file:///C:/Users/Administrator/.gemini/antigravity/brain/08c0dfb7-6bee-422f-8dd4-ac7487e63e69/app.py)
- Flask application.
- Routes:
    - `/`: Renders the main page.
    - `/extract`: POST endpoint to handle extraction logic.
- Logic:
    - Fetch `hubcloud.foo` page.
    - Extract the "Generate Direct Download Link" URL.
    - Fetch the intermediate `gamerxyt.com` page.
    - Extract `pixeldrain.dev` and `hubcdn` links.
    - Return links in JSON format.

### Frontend
#### [NEW] [templates/index.html](file:///C:/Users/Administrator/.gemini/antigravity/brain/08c0dfb7-6bee-422f-8dd4-ac7487e63e69/templates/index.html)
- Modern, responsive UI.
- Input field for URL.
- "Extract" button with loading state.
- Results section to display extracted links.
- "Copy" and "Open" buttons for each link.

#### [NEW] [static/style.css](file:///C:/Users/Administrator/.gemini/antigravity/brain/08c0dfb7-6bee-422f-8dd4-ac7487e63e69/static/style.css)
- Custom CSS for a premium look (dark mode, gradients, animations).

#### [NEW] [static/script.js](file:///C:/Users/Administrator/.gemini/antigravity/brain/08c0dfb7-6bee-422f-8dd4-ac7487e63e69/static/script.js)
- Handle form submission via fetch API.
- Update UI with results.

## Verification Plan

### Automated Tests
- None planned for this simple script, but I will verify the extraction logic manually.

### Manual Verification
1.  Start the Flask server.
2.  Open `http://localhost:5000` in the browser.
3.  Enter `https://hubcloud.foo/video/lcmwob4crawmnk1`.
4.  Click "Extract".
5.  Verify that two links are displayed:
    - One starting with `https://pixeldrain.dev/api/file/...`
    - One starting with `https://gpdl2.hubcdn.fans/...`
6.  Click the links to ensure they trigger a download.
