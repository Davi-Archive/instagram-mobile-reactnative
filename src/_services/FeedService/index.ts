import * as HttpApiService from '../HttpApiService'
import AsyncStorage from "@react-native-async-storage/async-storage";



const getPosts = async (id?: string) => {
    let url = '/feed'
    if (id) {
        url = `/feed?id=${id}`
    }
    return await HttpApiService.get(url)
}

const toggleLike = async (postId: string) => {
    return await HttpApiService.put(`/like?id=${postId}`)
}

const sendComment = async (postId: string, message: string) => {
    return await HttpApiService.put(`/comments?id=${postId}`, { "comentario": message })
}

const sendPost = async (body: FormData) => {
   return await HttpApiService.post('/publicacao', body, { "content-Type": "multipart/form-data" })
}

export { getPosts, toggleLike, sendComment, sendPost }