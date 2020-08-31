import axios from 'axios'


async function sendData(Name,Quantity) {
    const item={Name,Quantity}
    const result = await axios({
        url:"http://localhost:8000/addItem",
        method:"POST",
        headers:{'Content-Type':'application/json'},
        data:JSON.stringify({item})
    })
    console.log(result.data)
    return result.data.message.message
}

export default sendData