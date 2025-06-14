
const form = document.getElementById('g_contact_form');
const msgDiv = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault();
    msgDiv.style.color = '';
    msgDiv.textContent = 'Submitting…';

    fetch(form.action, {
        method: form.method,
        mode: 'cors',               // try 'cors'; if Google doesn’t allow it, see CORS note below
        cache: 'no-cache',
        redirect: 'follow',
        body: new FormData(form)
    })
        .then(response => {
            if (response.ok) {
                msgDiv.style.color = 'green';
                msgDiv.textContent = '✅ Thank you—your message has been sent!';
                form.reset();
            } else {
                throw new Error(`Status ${response.status}`);
            }
        })
        .catch(err => {
            msgDiv.style.color = 'crimson';
            // network/CORS errors or non-2xx statuses end up here
            msgDiv.textContent = `⚠️ Submission failed: ${err.message}`;
        });
});

