function UserGreeting(props){
  return (props.isLogined ? <h1>welcome to {props.username}</h1> : <h1>Please logined to the page </h1>)
}


export default UserGreeting