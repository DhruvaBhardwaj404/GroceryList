import axios from 'axios'


async function sendUpdate(_id,Name,Quantity) {
    const item={_id,Name,Quantity}
    const result = await axios({
        url:"http://localhost:8000/updateItem",
        method:"PUT",
        headers:{'Content-Type':'application/json'},
        data:JSON.stringify({item})
    })
    console.log(result.data)
    return result.data.message.message
}

export default sendUpdate