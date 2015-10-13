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


// seems like render has to be placed at the end
React.render(
    <CommentBox />,
    document.getElementById('content')
);