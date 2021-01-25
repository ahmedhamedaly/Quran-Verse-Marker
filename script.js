function verse_marker() {
    var num = document.getElementById("num").value

    var ar_nums = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]
    var r_bracket = "﴾"
    var l_bracket = "﴿"

    var output = ""
    for (n in num.toString()) {
        output += ar_nums[parseInt(num.toString().charAt(n))]
    }

    document.getElementById("print1").innerHTML = r_bracket + output + l_bracket
    document.getElementById("print2").innerHTML = l_bracket + output + r_bracket
}

document.getElementById("num").onkeyup = verse_marker;