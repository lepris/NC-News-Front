import React, { Component } from 'react';

class DummyHomeArticle extends Component {
    state = {
        article: {}
    }

    render() {
        const { id } = this.props;
        return <p>id</p>
    }
}

export default DummyHomeArticle