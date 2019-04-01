const EventEmitter = require('events')

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter
const eventName = 'user:click'

myEmitter.on(eventName, function (click){
  console.log('An user clicked', click)
})

myEmitter.emit(eventName, 'in scrollbar')
myEmitter.emit(eventName, 'in ok')

let count = 0
setInterval(function(){
  myEmitter.emit(eventName, 'in ok' + (++count))
}, 1000)