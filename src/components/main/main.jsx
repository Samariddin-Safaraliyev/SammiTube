import { useState, useEffect, useMemo } from 'react';
import { Stack, Box, Container, Typography } from '@mui/material';
import { colors } from '../../constants/colors';
import { Category, Videos } from '../';
import { ApiService } from '../../service/api.service';

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  const selectedCategoryHandler = (category) => setSelectedCategory(category);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`);
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [selectedCategory]);

  const memoizedVideosComponent = useMemo(() => <Videos videos={videos} />, [videos]);

  return (
    <Stack>
      <Category selectedCategoryHandler={selectedCategoryHandler} selectedCategory={selectedCategory} />
      <Box p={2} sx={{ height: '90vh' }}>
        <Container maxWidth={'90%'}>
          <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
            {selectedCategory} <span style={{ color: colors.secondary }}>Videos</span>
          </Typography>
          {memoizedVideosComponent}
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;