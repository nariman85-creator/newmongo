import * as api from '../api';


export const getPosts=()=>async(dispatch)=>{
    try {
        const {data}=await api.fetchPosts();
            dispatch({type:'FETCH_ALL',peyload:data});

    } catch (error) {
        console.log(error.message);
    }
};
export const createPost=(post)=>async(dispatch)=>{
    try{
      const {data}=await api.createPost(post);
      dispatch({type:'CREATE',peyload:data});
    }catch(error){
console.log(error.message);
    }
};

export const updatePost=(id,post)=>async(dispatch)=>{
    try {
      const {data} =  await api.updatePost(id,post);
      dispatch({type:'UPDATE',peyload:data});
    } catch (error) {
        console.log(error.message);
        
    }
};
export const deletePost=(id)=>async (dispatch)=>{
    try {
    await api.deletePost(id);
        dispatch({type:'DELETE',peyload:id})
    } catch (error) {
        console.log(error.message);
    }
};
export const likePost=(id)=>async(dispatch)=>{
    try {
        const {data}=await api.likePost(id);
        dispatch({type:'UPDATE',peyload:data});
    } catch (error) {
    console.log(error.message);

    }
}