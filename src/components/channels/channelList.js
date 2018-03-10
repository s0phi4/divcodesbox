import React from "react";
import Channel from "./channel";

class ChannelList extends React.Component {
    render() {
        return(
            <ul>
            {
                this.props.channels.map(chan =>{
                 return <Channel
                    channel={chan}
                    key={chan.id}
                    setChannel={this.props.setChannel}
                    activeChannel={this.props.activeChannel}
                        />
                })

            }
            </ul>
        )
    }
}


export default ChannelList
