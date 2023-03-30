<!DOCTYPE html>
<html lang="en">
<head>
    <title>JS Object</title>
</head>
<body>
    <p id="demo"></p>

    <script>
        let x,y;
        x = 10;
        y = 5;
    let greeting;
    if (x > y){
        greeting = "Horee saya bisa!";
    } else if(x < y){
        greeting = "Yahh kamu gagal!";
    }
    document.getElementById("demo").innerHTML = greeting;
    </script>
</body>
</html>
