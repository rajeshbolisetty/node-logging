export function info(message, messageContext = "", messageType = "") {
  let messageHeaders = getMessageContext(messageContext, messageType);
  console.log("INFO: " + messageHeaders + message);
}

export function warn(message, messageContext = "", messageType = "") {
  let messageHeaders = getMessageContext(messageContext, messageType);
  console.log("WARN: " + messageHeaders + message);
}

export function debug(message, messageContext = "", messageType = "") {
  let messageHeaders = getMessageContext(messageContext, messageType);
  console.log("DEBUG: " + messageHeaders + message);
}

export function error(message, messageContext = "", messageType = "") {
  let messageHeaders = getMessageContext(messageContext, messageType);
  if (typeof message === "object" && message !== null) {
    console.error(
      "ERROR: " + messageHeaders + (message.stack || JSON.stringify(message))
    );
  } else {
    console.error("ERROR: " + messageHeaders + message);
  }
}

function getMessageContext(messageContext, messageType = "") {
  if (messageContext || messageType) {
    return messageContext + " " + messageTypes[messageType];
  }

  return "";
}
