<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>강아지 짖기</title>
    <style>
        body {
            text-align: center;
            font-family: Arial;
            margin-top: 50px;
        }
        img {
            width: 300px;
        }
        button {
            font-size: 20px;
            padding: 10px 20px;
            margin-top: 20px;
        }
        #sound {
            font-size: 30px;
            margin-top: 20px;
            color: brown;
        }
    </style>
</head>
<body>

    <h1>🐶 강아지</h1>

    <img id="dogImg" src="https://i.imgur.com/4AiXzf8.jpeg" alt="강아지">

    <br>

    <button onclick="bark()">짖게 하기</button>

    <p id="sound"></p>

    <script>
        function bark() {
            document.getElementById("sound").innerText = "멍멍!! 🐶";

            // 이미지 살짝 바뀌는 효과
            document.getElementById("dogImg").style.transform = "scale(1.1)";

            setTimeout(() => {
                document.getElementById("dogImg").style.transform = "scale(1)";
            }, 200);
        }
    </script>

</body>
</html>
