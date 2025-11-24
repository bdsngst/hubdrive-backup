document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('urlInput');
    const extractBtn = document.getElementById('extractBtn');
    const messageDiv = document.getElementById('message');
    const resultsDiv = document.getElementById('results');

    extractBtn.addEventListener('click', async () => {
        const url = urlInput.value.trim();
        if (!url) {
            showMessage('Please enter a URL.', 'error');
            return;
        }

        setLoading(true);
        showMessage('');
        resultsDiv.innerHTML = '';

        try {
            const response = await fetch('/extract', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });

            const data = await response.json();

            if (data.error) {
                showMessage(data.error, 'error');
            } else if (data.links) {
                displayLinks(data.links);
            }
        } catch (error) {
            showMessage('An error occurred. Please try again.', 'error');
            console.error(error);
        } finally {
            setLoading(false);
        }
    });

    function showMessage(text, type = 'info') {
        messageDiv.textContent = text;
        messageDiv.className = 'message ' + type;
    }

    function setLoading(isLoading) {
        extractBtn.disabled = isLoading;
        extractBtn.textContent = isLoading ? 'Extracting...' : 'Extract';
    }

    function displayLinks(links) {
        links.forEach(link => {
            const card = document.createElement('div');
            card.className = 'result-card';
            
            card.innerHTML = `
                <div class="link-info">
                    <h3>${link.name}</h3>
                    <a href="${link.url}" target="_blank">${link.url}</a>
                </div>
                <div class="actions">
                    <button class="icon-btn copy-btn" data-url="${link.url}">Copy</button>
                    <a href="${link.url}" target="_blank" class="icon-btn" style="text-decoration:none; display:inline-block; line-height:1.2;">Open</a>
                </div>
            `;
            
            resultsDiv.appendChild(card);
        });

        // Add copy functionality
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const url = e.target.getAttribute('data-url');
                navigator.clipboard.writeText(url).then(() => {
                    const originalText = e.target.textContent;
                    e.target.textContent = 'Copied!';
                    setTimeout(() => {
                        e.target.textContent = originalText;
                    }, 2000);
                });
            });
        });
    }
});
