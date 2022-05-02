//За замовчуванням для кожної окремої події можна максимально зареєструвати 10 функцій обробників. 
//Щоб зняти це обмеження для всіх подій всіх створених екземплярів, змініть значення EventEmitter.defaultMaxListeners.


// const { EventEmitter } = require("events");

// const emitter = new EventEmitter();
// const eventName = "greet";
// emitter.on(eventName, function(){
//     console.log("Hello all!");
// });
// emitter.emit(eventName);


const { once, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log('Myevent: ', value);

  //===========================================

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err.message, /*err.stack*/);
  }

})();

//*Щоразу, коли ви викликаєте process.nextTick() на цій фазі event-loop, всі коллбеки, передані процесу process.nextTick(), 
//будуть вирішуватися до того, як цикл подій продовжиться(перейде на наступну фазу).

