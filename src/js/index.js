const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const btn = document.getElementById("btn")
const loading = document.getElementById("loading")
const container = document.getElementsByClassName("container")

let init = 0


const botSay = (data) => {
  return [
    "Halo, Namaku Clarabot. Siapa namamu?",
    `Halo ${data?.nama}, Berapa usiamu sekarang?`,
    `Ohhh, ${data?.usia} tahun, Hobi kamu apa?`,
    `Wah, Hobi aku juga ${data?.hobi} lho! Btw punya pacar nggak? ><`,
    `Oh ${data?.pacar} ya... Oke deh kalau gitu hehe. Udah dulu ya^^`,
  ]
}

pertanyaan.innerHTML = botSay()[0]

let userDatas = []

function botStart() {
  if (jawaban.value.length < 1) {
    return alert("silahkan isi jawaban dulu")
  }
  init++
  if (init == 1) {
    botDelay({ nama: jawaban.value })
  } else if (init == 2) {
    botDelay({ usia: jawaban.value })
  } else if (init == 3) {
    botDelay({ hobi: jawaban.value })
  } else if (init == 4) {
    botDelay({ pacar: jawaban.value })
  } else if (init == 5) {
    finishing()
  } else {
    botEnd()
  }
}

function botDelay(jawabanUser) {
  // console.log({ userDatas: userDatas })
  loading.style.display = "block"
  container[0].style.filter = "blur(5px)"
  userDatas.push(jawaban.value)
  setTimeout(() => {
    container[0].style.filter = "none"
    pertanyaan.innerHTML = botSay(jawabanUser)[init]
    jawaban.value = ""
    loading.style.display = "none"
  }, [800])
}

function finishing() {
  pertanyaan.innerHTML = `Thank you udah mau ngobrol sama aku ya, ${userDatas[0]}! Kapan-kapan main ${userDatas[2]} bareng ya! Dadah!`
  jawaban.value = "Oke, Thanks juga ya!"
  btn.innerHTML = "RESET"
}

function botEnd() {
  alert(`Terimakasih sudah berkunjung, ${userDatas[0]}! Anda akan diarahkan ke halaman utama`)
  window.location.reload()
}