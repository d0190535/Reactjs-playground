var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                Hello World!  I am a comment box yay

                Adding new react components
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
            );
    }
});

var CommentList = React.createClass({
    render: function () {
        return (
            <div className="commentList">
                I am a comment list woot
                <Comment author="Person-A">My first comment!</Comment>
                <Comment author="Person-B">My second comment!!</Comment>
            </div>
            );
    }
});

var CommentForm = React.createClass({
    render: function () {
        return (
            <div className="commentForm">
                I am a comment form awesome
            </div>
            );
    }
});

var Comment = React.createClass({
    render: function () {

        var style = {
            color: 'green',
            fontSize: 50
        };

        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span style={style}>
                    {this.props.children}
                </span>
            </div>
            );
    }
});

// seems like render has to be placed at the end
React.render(
    <CommentBox />,
    document.getElementById('content')
);

// notes: data from parent component (CommentList) is propagated down to the child component (Child)