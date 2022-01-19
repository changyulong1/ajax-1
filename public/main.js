console.log("我是main.js文件")
//请求css文件
getCss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/style.css")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const style = document.createElement("style")
            style.innerHTML = request.response
            document.head.appendChild(style)
        }
    }
    request.send()
}
//请求js文件
getJs.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/2.js")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const script = document.createElement("script")
            script.innerHTML = request.response
            document.body.appendChild(script)
        }
    }
    request.send()
}

//请求html文件
getHtml.onclick = () => {
    console.log(1)
    const request = new XMLHttpRequest()
    request.open("GET", "/3.html")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const div = document.createElement("div")
            div.innerHTML = request.response
            document.body.appendChild(div)
        }
    }
    request.send()
}
//请求xml文件
getXml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName("warning")[0].textContent
            console.log(text)
        }
    }
    request.send()
}
//请求json文件
getJson.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const json = JSON.parse(request.response)
            console.log(json)
        }
    }
    request.send()
}
//ajax分页功能
let n = 1
getNext.onclick = () => {
    console.log(3)
    const request = new XMLHttpRequest()
    request.open("GET", `page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.map((time) => {
                const li = document.createElement("li")
                li.innerHTML = time.id
                xxx.appendChild(li)
            })
        }
        n++
        n = n >= 3 ? 0 : n
    }
    request.send()
}

// getCss.onclick = () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "/style.css")

//     request.onload = () => {
//         console.log(request.response)
//         const style = document.createElement("style")
//         style.innerHTML = request.response
//         document.head.appendChild(style)
//     }
//     request.onerror = () => {
//         console.log("失败")
//     }
//     request.send()
// }


// getJs.onclick = () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "/2.js")
//     request.onload = () => {
//         console.log("请求2.js成功")
//         const script = document.createElement("script")
//         script.innerHTML = request.response
//         document.body.appendChild(script)
//     }
//     request.onerror = () => {
//         console.log("成功")
//     }
//     request.send()
// }

// getHtml.onclick = () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "/3.html")
//     request.onload = () => {
//         console.log("请求html文件成功")
//         const div = document.createElement("div")
//         div.innerHTML = request.response
//         document.body.append(div)
//     }
//     request.onerror = () => {
//         console.log("请求html文件失败")
//     }
//     request.send()
// }

// getXml.onclick = () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "/4.xml")
//     request.onload = () => {
//         console.log("请求xml文件成功")
//         const dom = request.responseXML
//         const text = dom.getElementsByTagName("warning")[0].textContent
//         console.log(text.trim())
//     }
//     request.onerror = () => {
//         console.log("请求xml文件失败")
//     }
//     request.send()
// }
// getJson.onclick = () => {
//     console.log(66)
//     const request = new XMLHttpRequest()
//     request.open("GET", "/5.json")
//     request.onload = () => {
//         console.log("请求json文件成功")
//         const text = request.response
//         console.log(JSON.parse(text))

//     }
//     request.onerror = () => {
//         console.log("请求json文件势失败")
//     }
//     request.send()
// }
// let n = 1
// getNext.onclick = () => {

//     const request = new XMLHttpRequest()
//     request.open("GET", `/page${n + 1}`)
//     request.onload = () => {
//         console.log("请求成功")
//         const array = JSON.parse(request.response)
//         const li = array.map((time) => {
//             const li = document.createElement("li")
//             li.innerHTML = time.id
//             xxx.appendChild(li)
//         })

//     }
//     n++
//     n = n >= 3 ? 0 : n
//     request.send()
// }
// const request = new XMLHttpRequest()//创建请求对象request
// request.open("GET", "/style.css")//填写请求地址
// request.onload = () => {//监听请求成功
//     console.log("请求成功")
// }
// request.onerror = () => {//监听请求失败
//     console.log("请求失败")
// }
// request.send()//发起请求