window.onload = function() {
    //var dp = {{ value|tojson }};
    var dp = ['0', '0.91300003']

    const element = document.getElementById('ann');
    if(dp[0] == '0') {
        var per = parseFloat(dp[1]) * 100;
        element.innerHTML += String(per.toFixed(2)) + "%의 확률로 우울증이 아닙니다.";
    } else {
        var per = parseFloat(dp[1]) * 100;
        per.toFixed(2);
        element.innerHTML += String(per.toFixed(2)) + "%의 확률로 우울증입니다.";
    }
}
