import { baseApiReq } from '../requestConfs.js'
import { normalizeTodoData } from '../../../normalizer/todo/todoRequestNormalizer.js'
export const getAllTodos = async () => {
    try{
        const res = await baseApiReq.get('/todos')
        const todos = normalizeTodoData(res.data)
        return todos
    }catch(err){
        throw err;
    }
}