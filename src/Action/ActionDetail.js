import axios from "axios"

export const actionDetail = async (param) => {
    try {
        const data = await axios.get('https://fe.runner.api.devcode.biofarma.co.id/recipes/'+param);

        if (data?.status == 200) {
            return data?.data
        }

        if (data?.response && data?.response.length > 0) {
            return data?.response.data
        }
    } catch (err) {
        return err;
    }
}