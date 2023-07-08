import axios from 'axios'

const api='https://api.api-ninjas.com/v1/recipe?query='


async function CallAPI (query_param) {
    const response = await axios(`${api}${query_param}`,{
        method : "GET",
        headers : {
            "X-Api-Key" : "FbZmltpv0x3hGm+cDjTxMg==I6N48PH9hcHZ49fE"
        }
    })

    try {
       return response.data
    } catch (error) {
        console.log({Kesalahan : error})
    }

}

export default CallAPI