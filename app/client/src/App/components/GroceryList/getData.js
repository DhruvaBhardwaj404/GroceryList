import axios from 'axios'

async function getData() {
    const result = await axios({
        url:"http://localhost:8000/getData",
        method:"POST",
        headers:{'Content-Type':'application/json'}
    })
    return result.data.items
}

export default getData