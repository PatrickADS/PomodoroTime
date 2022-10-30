const promodoroTime = prompt('Digite seu tempo de estudo...')
let promodoroSeconds = promodoroTime * 60
const promodoroOutpout = document.querySelector('.promodoro')

    const Countdown = () => {
        promodoroOutpout.innerHTML = promodoroTime
        const minutes = Math.floor(promodoroSeconds / 60)
        const seconds = promodoroSeconds % 60
        promodoroSeconds --
            if (promodoroSeconds > -1) {
                promodoroOutpout.innerHTML = `${minutes > 9 ? minutes: `0${minutes}`} : ${seconds > 9 ? seconds : `0${seconds}`}`
            }
            if(promodoroSeconds <= -1) {
                promodoroOutpout.innerHTML = "Tempo Finalizado!"
            }
    }

    setInterval(Countdown, 1000);