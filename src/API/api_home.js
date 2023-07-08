import axios from 'axios'

const api_exampl ='http://localhost:5173/data.json'
const api_deploy ='https://resep-asik.vercel.app/data.json'



async function CallAPI () {
    const response = await axios(api_deploy,{
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