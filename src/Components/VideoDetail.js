import React from 'react'

const VideoDetail = ({ VideoDetail }) => {
    if (!VideoDetail) {
        return <div>Loading....</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${VideoDetail.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title="video player"></iframe>
            </div>
            <div className="ui segment">
                <h4 className="header">{VideoDetail.snippet.title}</h4>
                <p>{VideoDetail.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail
