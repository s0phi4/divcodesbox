import React from 'react';

class Channel extends React.Component {

    onClick(e) {
        e.preventDefault();
        const {setChannel, channel} = this.props;
        setChannel(channel);
    }
    render() {
        const {channel} = this.props;
        return(
            <li>
            <a onClick={this.onClick.bind(this)}>
            {channel.name}
            </a>
            </li>
        )
    }
}


export default Channel
