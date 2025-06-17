const data = [
    { title: 'OpenAI', url: 'https://openai.com', description: 'Artificial intelligence research and deployment company.' },
    { title: 'GitHub', url: 'https://github.com', description: 'Code hosting platform for version control and collaboration.' },
    { title: 'Wikipedia', url: 'https://wikipedia.org', description: 'Free online encyclopedia.' },
    { title: 'Example Domain', url: 'https://example.com', description: 'Illustrative examples in documents.' },
    { title: 'Python', url: 'https://python.org', description: 'Official website of the Python programming language.' }
];

function search(query) {
    query = query.toLowerCase();
    return data.filter(item => item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query));
}

function renderResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>No results found.</p>';
        return;
    }
    results.forEach(item => {
        const div = document.createElement('div');
        div.className = 'result';
        div.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a><p>${item.description}</p>`;
        resultsDiv.appendChild(div);
    });
}

document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('query').value;
    const results = search(query);
    renderResults(results);
});

document.getElementById('query').addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        document.getElementById('search-btn').click();
    }
});
