import React from 'react'
import VideoItem from './VideoItem'

const VideoList = (props) => {
    const renderedList = props.videos.map(item => {
        return <VideoItem
            key={item.id.videoId}
            video={item}
            onVideoSelect={props.onVideoSelect}
        />
    })

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList
