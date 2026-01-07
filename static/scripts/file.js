async function downloadFile(type, id) {
    await fetch('/file', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            type: type,
            id: id
        })
    });
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