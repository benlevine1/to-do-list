export function randomString(length = 8){
    const characters = 'AaBbCcDdEeFfGghhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'
    let randomString = '';
    for(let x=0; x<length; x++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString+=characters[randomIndex];   
    }
    return randomString
}