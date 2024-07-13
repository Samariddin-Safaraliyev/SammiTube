import { Box, Stack, CircularProgress } from '@mui/material';
import React, { useMemo } from 'react';

const Loader = () => {
  const memoizedCircularProgress = useMemo(() => <CircularProgress />, []);

  return (
    <Box minHeight={'100vh'}>
      <Stack direction={'row'} justifyContent={'center'} height={'80vh'}>
        {memoizedCircularProgress}
      </Stack>
    </Box>
  );
};

export default Loader;