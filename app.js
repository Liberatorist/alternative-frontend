document.pagenumber = get_page_number_from_url(location.href)
const max_page_number = 200
set_buttons(0)


first_click = function () { set_buttons(0) }
before_click = function () { set_buttons(document.pagenumber - 1) }
after_click = function () { set_buttons(document.pagenumber + 1) }
last_click = function () { set_buttons(max_page_number) }
btn_click = function (btn) { set_buttons(parseInt(btn.textContent)) }

document.getElementById("first_top").addEventListener("click", e => first_click())
document.getElementById("first_btm").addEventListener("click", e => first_click())

document.getElementById("before_top").addEventListener("click", e => before_click())
document.getElementById("before_btm").addEventListener("click", e => before_click())

for (idx = 0; idx < 5; idx++) {
  const btn_top = document.getElementById("btn_" + idx + "_top")
  const btn_btm = document.getElementById("btn_" + idx + "_btm")
  btn_top.addEventListener("click", e => btn_click(btn_top))
  btn_btm.addEventListener("click", e => btn_click(btn_btm))
}
document.getElementById("after_top").addEventListener("click", e => after_click())
document.getElementById("after_btm").addEventListener("click", e => after_click())

document.getElementById("last_top").addEventListener("click", e => last_click())
document.getElementById("last_btm").addEventListener("click", e => last_click())

function set_buttons(pagenumber) {
  if (pagenumber < 0 | pagenumber > 200) {
    return
  }
  document.pagenumber = pagenumber
  location.href = "http://127.0.0.1:5501/index.html#" + pagenumber
  const min_number = Math.min(Math.max(pagenumber - 2, 0), max_page_number - 4)

  for (idx = 0; idx < 5; idx++) {
    const current_number = min_number + idx
    const top_button = document.getElementById("btn_" + idx + '_top')
    const bottom_button = document.getElementById("btn_" + idx + '_btm')

    top_button.textContent = current_number
    bottom_button.textContent = current_number
    if (current_number == pagenumber) {
      top_button.style.color = 'red'
      bottom_button.style.color = 'red'
    } else {
      top_button.style.color = 'black'
      bottom_button.style.color = 'black'
    }
  }
}

function get_page_number_from_url(url) {
  idx_start = url.indexOf("#")
  var page_number = ""
  for (idx = idx_start + 1; idx < url.length; idx++) {
    page_number += url.charAt(idx)
  }
  return page_number
}
const content = {
  "result": "ok",
  "data": {
    "id": "04dba92e-70f7-4fff-a5b5-7b5b8c65e90d",
    "type": "manga",
    "attributes": {
      "title": {
        "en": "STAND UP START"
      },
      "altTitles": [
        {
          "en": "スタンドUPスタート"
        }
      ],
      "description": {
        "en": "Beautiful creatures called 'Alichino' grant any wish to those who find them--but at a price!\r\n\r\nA young lady searching for an Alichino wants to bring her brother back to life. She meets Tsugiri, a handsome young man who she thinks is an Alichino. While Tsugiri turns out to be a mere mortal, he does have a mysterious connection with these rare creatures--a connection that brings him and those around him grave danger!"
      },
      "isLocked": false,
      "links": {
        "ap": "stand-up-start",
        "bw": "de8cfc6ca8-4d58-4e29-aeda-f59c110a4920",
        "mu": "168525",
        "amz": "https:\/\/www.amazon.co.jp\/dp\/B08KDP3YF4",
        "ebj": "https:\/\/ebookjapan.yahoo.co.jp\/books\/609025\/A002460049\/",
        "raw": "https:\/\/tonarinoyj.jp\/episode\/13933686331665821621"
      },
      "originalLanguage": "ja",
      "lastVolume": null,
      "lastChapter": "0",
      "publicationDemographic": "seinen",
      "status": "ongoing",
      "year": null,
      "contentRating": "safe",
      "tags": [
        {
          "id": "b9af3a63-f058-46de-a9a0-e0c13906197a",
          "type": "tag",
          "attributes": {
            "name": {
              "en": "Drama"
            },
            "version": 1
          }
        }
      ],
      "createdAt": "2021-04-19T21:46:43+00:00",
      "updatedAt": null,
      "version": 1
    }
  }
}

function set_manga_box(box, content){
  const text_box = box.children[0]
  const image = box.children[1].children[0]

  text_box.children[0].textContent = content.data.attributes.title.en
  text_box.children[1].textContent = content.data.attributes.description.en
  image.src = "default2.jpg"
}

const box = document.getElementById("manga_0")
set_manga_box(box, content)


async function make_request() {
  const data = {
    name: "Said",
    id: 32
  }
  const url = "https://jsonplaceholder.typicode.com/posts"
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const jayson = make_request()
console.log(jayson)
console.log(jayson.resolve)