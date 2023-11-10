
function makeRequest(location){
    return new Promise((resolve,reject) => {
        console.log(`Making Request to ${location}`)
        if(location === 'Google'){
            resolve('Google says hi')
        }
        else{
            reject('we can only talk to google')
        }
    })
}
function processRequest(response){
    return new Promise((resolve,reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}
//  --- using promises  ---
// makeRequest('Google').then((response) => {
//     console.log('response recieved')
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse);
// }).catch(err => {
//     console.log(err)
// }) 


// using async and await
async function doWork(){
    try{

        const response =  await makeRequest('Google')
        console.log('Response Revieced')
        const  processedResponse = await processRequest(response)
        console.log(processedResponse)
    }
    catch(err){
    console.log(err)
    }
}
doWork()