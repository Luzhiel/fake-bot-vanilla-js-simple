const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const btn = document.getElementById("btn")

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
  console.log({ userDatas: userDatas })
  userDatas.push(jawaban.value)
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init]
    jawaban.value = ""
  }, [500])
}

function finishing() {
  pertanyaan.innerHTML = `Thank you udah mau ngobrol sama aku ya, ${userDatas[0]}! Kapan-kapan main ${userDatas[2]} bareng ya! Dadah!`
  jawaban.value = "Oke, Thanks juga ya!"
  btn.innerHTML = "RESET"
}

function botEnd() {
  window.location.reload()
}