import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { ChannelCard, VideoCard, Loader } from '.'

const Videos = ({ videos, direction }) => {
    if(!videos?.length) return <Loader />;

    return (
        <div>
            <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start'>
                {videos.map((item, index) =>
                    (
                        <Box key={index}>
                          {item.id.videoId && <VideoCard video={item}/>}
                          {item.id.channelId && <ChannelCard channelDetail={item}/>}  
                        </Box>
                    ))}
            </Stack>
        </div>
    )
}

export default Videos