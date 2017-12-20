
let nodeTode=0;
export const addTodo=(text)=>({
       type:"ADD_TODO",
       id:nodeTode++,
       text
});

export const toggleTodo=(id)=>({
      type:"TOGGLE_TODO",
      id
  });

export const setVisibilityFilter=(filter)=>{
  return {
    type:"SET_VISITIBILITY_FILTER",
    filter
  }
}
//用action定义了你需要干什么
