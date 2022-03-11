import axios from "axios"

export const actionLogin = async (param) => {
    try {
        const data = await axios.post('https://fe.runner.api.devcode.biofarma.co.id/auth/login', param);
        return data;
    } catch (err) {
        return err;
    }
}