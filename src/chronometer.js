class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(printTimeCallback) {
    
      this.intervalId = setInterval(() => {
        this.currentTime++;
        
        if (printTimeCallback) {
          printTimeCallback(this.currentTime)
        }
      }, 1000);
  
  }
  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return Math.floor(this.currentTime%60)
  }

  computeTwoDigitNumber(value) {
    
    let stringValue=value.toString()
    return stringValue.length > 1? stringValue : `0${stringValue}`
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime=0
  }

  split() {
    
    return `${String(this.getMinutes()).padStart(2, '0')}:${String(this.getSeconds()).padStart(2,0)}`
  }
}
