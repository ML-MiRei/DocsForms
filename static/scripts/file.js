function downloadFile(type, id) {
    let url;
    if (type === 'pdf') {
        url = `/file/${id}`;  
    } else if (type === 'word') {
        url = `/file/${id}?type=docx`; 
    }
    window.open(url, '_blank');
}


async function deleteFile(id) {
    await fetch('/file', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id
        })
    });
}