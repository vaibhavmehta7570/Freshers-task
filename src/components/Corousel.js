import React, { Component } from "react";
import "../assets/styles/Home.css";
class Corousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${this.props.match.params.id}`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    images: json,
                    isLoaded: true,
                })
            });
    }
    render() {
        var { isLoaded, images } = this.state;
        console.log(images);
        // var allPosts = posts.map(post => {
        //     return (
        //         <div className="cards mb-3">
        //             <Cards
        //                 key={post.id}
        //                 title={post.title}
        //                 id={post.id}
        //                 body={post.body}
        //                 user={post.userId}
        //             />
        //         </div>
        //     );
        // })
        if (!isLoaded) {
            return <div> Loading...</div>;

        }
        else {
            return (
                <div className="all-posts">
                    {/* {allPosts} */}
                    loading is done
                </div>
            );
        }
    }
}
export default Corousel;