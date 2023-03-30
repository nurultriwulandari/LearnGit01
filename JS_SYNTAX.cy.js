<!DOCTYPE html>
<html lang="en">
<head>
    <title>JS Variable</title>
</head>
<body>
    <p id="number"></p>
    <p id="variable"></p>

    <script>
        let x,y,z;
        x = 10;
        y = "saya belajar javascript";
        z = 2;
        document.getElementById('number').innerHTML = "variable x and z is: " + (x + z);
        document.getElementById('variable').innerHTML = "variable y is: " + y;
    </script>
</body>
</html>
