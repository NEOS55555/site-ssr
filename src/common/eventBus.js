class EventBus {
  constructor() {
    this.events = this.events || new Object(); 
  }
}
EventBus.prototype.emit = function(type, ...args) { 
  let e = this.events[type] || [];
  let res = null
  for (let i = 0; i < e.length; i++) {   
    res = e[i].apply(this, args);    
  } 
  if (e.length === 1) {
    return res;
  } 
};

EventBus.prototype.addListener = function(eventType, fun) { 
  const [type, id] = eventType.split('#')
  
  if (id) {
    this.events[eventType] = [fun];
  } else {
    this.events[type] = this.events[type] || []; 
    this.events[type].push(fun);
  }
};
EventBus.prototype.on = EventBus.prototype.addListener;
const eventBus = new EventBus();

export default eventBus;
