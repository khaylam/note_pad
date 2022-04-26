const content = document.getElementById("t")
const date = document.getElementById("d")
const addbutton = document.getElementById("add")
const delbutton = document.getElementById("remove")
const list = document.getElementById("list")
const content_list = []
const clearbutton = document.getElementById("clear")

addbutton.addEventListener('click', function (){
    content_list.push({
        date: date.value,
        content: content.value,
    })
    let html_content = ""
    content_list.forEach(function (item) {
        html_content = html_content + `
        <div class="item">
            <div>
                <p>Date: ${item.date} </p>
                <p>Content: ${item.content}</p>
                <br>
            </div>
        </div> 
        `
    })
    list.innerHTML = html_content
})

delbutton.addEventListener('click', function (){
    let html_content = ""
    content_list.pop()
    for (let i = 0; i < content_list.length; i++){
        html_content = html_content + `
       <div class="item">
            <div>
                <p>Date: ${content_list[i].date} </p>
                <p>Content: ${content_list[i].content}</p>
                <br>
            </div>
        </div>  
       `
    }
    list.innerHTML = html_content
})

clearbutton.addEventListener('click', function(){
    while (content_list.length > 0){
        content_list.pop()
    }
    list.innerHTML = ""
})