<?php

    $submit = $_POST['submit'];
    
    function displayOrder() {
        echo '<script language="javascript" src="app.js">';
        echo '</script>';
    }

    if (isset($submit)) {
        displayOrder();
    }
      
?>