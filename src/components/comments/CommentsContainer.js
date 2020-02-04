import React from 'react';
import CommentComponent from "./CommentComponent";



class CommentsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenComments: false
        };
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    onButtonClick() {
        this.setState({
            isOpenComments: !this.state.isOpenComments
        });
    }
    render() {
        const {comments} = this.props;
        return (
            <div className="card">

                <button className={`btn ${this.state.isOpenComments
                    ? 'btn-danger'
                    : 'btn-success'
                }`}
                        onClick={this.onButtonClick}
                        style={{
                            position: "absolute",
                            right: 81,
                            marginTop: 5,
                            width: 65
                        }}
                >
                    {this.state.isOpenComments
                        ? 'Close'
                        : 'Open'
                    }

                </button>
                {this.state.isOpenComments && (
                    <div>
                        {comments.map(comment => (
                            <CommentComponent author={comment.author}
                                              commentText={comment.commentText}
                                              likes={comment.likes}
                                              key={comment.author}
                            />
                        ))}

                    </div>
                )}
            </div>
        );
    }
}
export default CommentsContainer;

