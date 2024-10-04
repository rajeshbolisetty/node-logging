export function info(message, messageContext = "", messageType = "") {
  const messageHeaders = getMessageContext(messageContext, messageType);
  console.info(`INFO: ${messageHeaders}${message}`);
}

export function warn(message, messageContext = "", messageType = "") {
  const messageHeaders = getMessageContext(messageContext, messageType);
  console.warn(`WARN: ${messageHeaders}${message}`);
}

export function debug(message, messageContext = "", messageType = "") {
  const messageHeaders = getMessageContext(messageContext, messageType);
  console.debug(`DEBUG: ${messageHeaders}${message}`);
}

export function error(message, messageContext = "", messageType = "") {
  const messageHeaders = getMessageContext(messageContext, messageType);
  if (typeof message === "object" && message !== null) {
    console.error(`ERROR: ${messageHeaders}${message.stack || JSON.stringify(message)}`);
  } else {
    console.error(`ERROR: ${messageHeaders}${message}`);
  }
}

function getMessageContext(messageContext, messageType = "") {
  if (messageContext || messageType) {
    return `${messageContext} ${messageTypes[messageType]}`;
  }
  return "";
}

const messageTypes = {
  REQUEST: "Request",
  RESPONSE: "Response",
};