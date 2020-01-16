<?php
        $file_name = $_FILES['file1']['name'];
        $tmp_name = $_FILES['file1']['tmp_name'];

        if(move_uploaded_file($tmp_name, './upload_dir/'.$file_name))
            echo "File Uploaded Successfully:)";
        else
            echo "Error! Something Went Wrong Please Try again later.";
?>