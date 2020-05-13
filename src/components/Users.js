import React,{ Component } from "react";
import UserCard from "./UserCard";
import "../assets/styles/Users.css";
class Home  extends Component{
    constructor(props){
        super(props)
        this.state={
            users:[],
            isLoaded:false
        }
    }
    componentDidMount(){
         fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=> res.json())
            .then(json =>{
                this.setState({
                    isLoaded:true,
                    users:json
                })  
            });
        }
        render(){
            var { isLoaded,users }= this.state;
            var allUsers= users.map(user=>{
                console.log(user);
                return(
                    <div className="cards mb-3">
                        <UserCard
                            key={user.id}
                            name={user.name}
                            user={user}
                            id={user.id}
                        />
                    </div>
                );
            })
            if(!isLoaded){
                return <div> Loading...</div>;
            }
            else{
                return(
                    <div className="all-users">
                        {allUsers}
                    </div>        
                );
                }
        }
}
export default Home;