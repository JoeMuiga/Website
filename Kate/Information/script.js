document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let comment = document.getElementById('comment').value;
    
    let commentSection = document.getElementById('commentSection');
    let newComment = document.createElement('div');
    newComment.innerHTML = `<strong>${name}</strong><p>${comment}</p><hr>`;
    
    commentSection.appendChild(newComment);
    
    document.getElementById('commentForm').reset();
});
