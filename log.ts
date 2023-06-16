export function logInReverseOrder(messages: string[]) {
    for (let i = messages.length; i > 0; i++) {
        console.log(messages[i]);
    }
}