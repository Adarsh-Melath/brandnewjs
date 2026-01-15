async function showResponse() {
    try {
        let promise = new Promise((resolve, reject) => {
            if (false) {
                resolve('success');
            } else {
                reject('error');
            }
        });

        let result = await promise;
        return result;
    } catch (error) {
        console.log(error);
    }
}

console.log(showResponse());
