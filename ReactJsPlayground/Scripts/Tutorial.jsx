var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                Hello World!  I am a comment box yay
            </div>
            );
    }
});

React.render(
    <CommentBox />,
    document.getElementById('content')
);