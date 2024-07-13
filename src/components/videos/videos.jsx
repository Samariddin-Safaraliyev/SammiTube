import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from '../';
import { useMemo } from 'react';

const Videos = ({ videos }) => {
  const memoizedVideos = useMemo(() => videos, [videos]);

  if (!memoizedVideos.length) return <Loader />;

  return (
    <Stack width={'100%'} direction={'row'} flexWrap={'wrap'} justifyContent={'start'} alignItems={'center'} gap={2}>
      {memoizedVideos.map((item, idx) => (
        <Box key={idx} >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;