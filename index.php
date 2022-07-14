<?php
echo '

<html>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="index.css" />
    <link rel="icon" type="image/x-icon" href="images/favicon.ico"/>
</head>
<body>
    <nav class="navbar">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="images/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
            Card Distributer
        </a>
        </div>
    </nav>
    <div class="row align-flex-start mt-4" style="width: 100%;" >
        <div class="colLeft col-2">
            <div class="container-fluid">
                <div class="mb-3">
                    <label for="noOfPerfon" class="form-label">No. of Person</label>
                    <input type="text" step="1" class="form-control" id="noOfPerson" placeholder="1">
                </div>
                <button type="button" class="btn btn-primary" onclick="giveCard()">Give Card</button>
            </div>
        </div>
        <div class="colRight col">
            <div class="personContainer container-fluid" id="personContainer">
            </div>
        </div>
    </div>

    <script src="index.js"></script>
</body>
</html>';

?>