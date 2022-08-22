import { Notify } from 'quasar';

const nError = (message: string, closeLabel?: 'Cerrar') => {
  /*
  this.$log.info('error message: ', message)
  this.$log.info(typeof message)
  let oMessage = ''
  if (typeof message === 'object' && message !== null) {
    for (const [key, value] of Object.entries(message)) {
      this.$log.info(key + ' ' + value) // "a 5", "b 7", "c 9"
      oMessage += '| ' + key + '>' + value
    }
  } else {
    oMessage = message
  }
  this.$log.info('oMessage: ', oMessage)
  */
  Notify.create({
    message,
    color: 'negative',
    icon: 'error',
    closeBtn: closeLabel,
  });
};

const nSuccess = (message: string, closeLabel?: 'Ok') =>
  Notify.create({
    message,
    color: 'positive',
    icon: 'tag_faces',
    closeBtn: closeLabel,
  });

const nWarning = (message: string, closeLabel?: 'Cerrar') =>
  Notify.create({
    message,
    color: 'warning',
    icon: 'warning',
    closeBtn: closeLabel,
  });

export { nError, nSuccess, nWarning };
