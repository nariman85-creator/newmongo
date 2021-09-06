export default(posts=[],action)=>{
    switch (action.type) {
        case 'FETCH_ALL':
            
        return action.peyload;
         case 'CREATE':
             return [
                 ...posts,action.peyload
             ];
             case 'UPDATE':
                 case 'LIKE':
                 return posts.map((post)=>post._id===action.peyload._id?action.peyload:post);
                 case 'DELETE':
                     return posts.filter(post=>post.id!=action.peyload);
        default:
            return posts;
    }
}