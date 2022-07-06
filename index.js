// var password =123456;
// var input;
// var entry_count = 0;
// var entry_limit = 3;
// var out_of_limit = false;



// while(password!=input && !out_of_limit)
//     {
//         entry_count++;
//         if(entry_count <= entry_limit)
//             {
//                 input=prompt("請輸入密碼");
//             }
//         else
//             {
//                 out_of_limit = true;
//             }
//     }
// if(out_of_limit)
//     {
//         alert("超過輸入次數")
//     }
//     else
//     {
//         alert("登入成功")
//     }


document.getElementById("#title");
document.getElementById("#content");
document.getElementById("#btn");
document.getElementById("#list");

btn.addEventListener("click", function()
    { 
        list.innerHTML = list.innerHTML +
        `
        <div class="article">
            <h2>${title.value}</h2>
            <p>${content.value}</p>
        </div>
        `;
        title.value = "";
        content.value = "";
    }
)

// document.querySelector("#comment > div:nth-child(6) > p > span:nth-child(3)")
// <span>07-06 15:12:02</span>

// #comment > div:nth-child(6) > p > span:nth-child(3)
// document.querySelector("#comment > div:nth-child(5) > p > span:nth-child(3)")

// document.querySelector("#comment_btn")
// document.querySelector("#comment_input")