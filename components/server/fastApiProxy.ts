

export const getTestResponse = async () => {
  try {

    // console.log('content: ' + content)
    // console.log('role: ' + chatMessage.role)
    // console.log('previousResponseId: ' + chatMessage.previousResponseId)

    // example GET
    const response = await fetch('/api/test', {
      method: 'GET'
    })

    const responseData = await response.json();
    // console.log('reponse in sendChatRequest: ' + JSON.stringify(responseData));

    return responseData;
  } catch (error) {
    console.log('error in getTestResponse.');
    console.log(error)
  }
}
