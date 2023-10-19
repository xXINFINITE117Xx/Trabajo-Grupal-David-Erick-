document.addEventListener('DOMContentLoaded', function() {
    const commentTextarea = document.getElementById('comment');
    const counter = document.getElementById('counter');
    const commentList = document.querySelector('.comment-box ul');
    const submitCommentButton = document.getElementById('submit-comment');
    const toUpperCaseButton = document.getElementById('to-upper-case');
    const toLowerCaseButton = document.getElementById('to-lower-case');

    let comments = [];

    function updateCounter() {
        const remainingChars = 255 - commentTextarea.value.length;
        counter.textContent = remainingChars;

        if (remainingChars < 0) {
            alert('Máximo 255 caracteres');
            window.location.reload();
        }
    }

    function addComment(comment) {
        comments.push(comment);
        renderComments();
    }

    function renderComments() {
        commentList.innerHTML = '';
        comments.forEach(comment => {
            const li = document.createElement('li');
            li.innerHTML = `<p><strong>Usuario:</strong> <span style="color: green; font-weight: bold;">${comment}</span></p>`;
            commentList.appendChild(li);
        });
    }

    submitCommentButton.addEventListener('click', function() {
        const commentText = commentTextarea.value.trim();
        if (commentText !== '') {
            addComment(commentText);
            commentTextarea.value = '';
            updateCounter();
        }
    });

    toUpperCaseButton.addEventListener('click', function() {
        commentTextarea.value = commentTextarea.value.toUpperCase();
    });

    toLowerCaseButton.addEventListener('click', function() {
        commentTextarea.value = commentTextarea.value.toLowerCase();
    });

    commentTextarea.addEventListener('input', updateCounter);
});
