const question = document.getElementById('pertanyaan')
const answer = document.getElementById('jawaban')

let bot = 0;

function botsays (jawaban) {
    return [
       'Halo perkenalkan saya Fakebot, Siapa namamu??',
       `salam kenal ${jawaban?.nama}, umur kamu berapa??`,
       `ohh masih ${jawaban?.umur}, kalo boleh tau sekarang lagi apa??`,
       'oalah kerenn ya , btw hobby kamu apa?',
       'widihh boleh juga wkwkwkwkwk , dah punya pacar blm??',
       'oke oke sipp , btw udahan dulu ya nanti ngobrol lagi',
   ]
}

question.innerHTML = botsays()  [0]

let userdata = []

const botstart = () => {
      bot++
    if(bot === 1) {
        console.log({nama: answer.value})
        botdelays({nama: answer.value})
    } else if(bot === 2) {
        console.log({umur: answer.value})
        botdelays({umur: answer.value})
    } else if(bot === 3) {
        console.log({busy: answer.value})
        botdelays({busy: answer.value})
    } else if(bot=== 4) {
        console.log({hobby: answer.value})
        botdelays({hobby: answer.value})
    } else if(bot === 5) {
        console.log({Pacar: answer.value})
        botdelays({Pacar: answer.value})
    } else if(bot === 6){
       botfinish()
    } else {
        botend()
    }

}

const botdelays = (jawabanuser) => {
 setTimeout(() => {
  console.log({userdata: userdata})
  question.innerHTML = botsays(jawabanuser) [bot]
 }, [1250])
  userdata.push(answer.value)
  answer.value = ''
}

const botfinish = () => {
    question.innerHTML = `terima kasih ${userdata[0]} sudah main ke botproject , sampai jumpa...`
    console.log('terima kasih sudah main ke botproject , sampai jumpa...')
    answer.value = ""
}

const botend = () => {
   window.location.reload()
}