document.getElementById('upload_file').addEventListener('submit', uploadFile);

function uploadFile(e) {
    e.preventDefault();

    var file1 = document.getElementById('filedata').files[0];
    var file = new FormData();
    file.append('file1', file1);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'upload.php', true);
    xhr.onload = function(){
        if(this.status == 200)
            document.getElementById('out').innerHTML = "<p>"+ this.responseText +"</p>"
    }
    xhr.upload.addEventListener('progress', progresshandler, false);
    xhr.addEventListener('error', errorhandler, false);
    xhr.addEventListener('load', completehandler, false);
    xhr.send(file);
}

function progresshandler(e) {
    var percent = (e.loaded / e.total) * 100;
    document.getElementById('out').innerHTML = "We are uploading your file Please Wait...        " + Math.round(percent) + "%";
    document.getElementById('upload_status').style.width = Math.round(percent) + "%";
}

function errorhandler(e) {
    document.getElementById('upload_status').className = "red darken-4";
}

function completehandler(e) {
    document.getElementById('upload_status').style.width = "0%";
}