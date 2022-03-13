
import axios from "axios"
export const actionStep = async (param) => {
    try {
        const data = await axios.get('https://fe.runner.api.devcode.biofarma.co.id/recipes/'+param+'/steps');
        if (data?.status == 200) {
          return data
        }
        return data;
    } catch (err) {
        return err?.response;
    }
}