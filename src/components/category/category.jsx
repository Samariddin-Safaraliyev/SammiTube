import { useMemo } from 'react';
import { Stack } from '@mui/material';
import { categoryArray } from '../../constants/categoryArray/category-array';
import { colors } from '../../constants/colors';

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  const memoizedCategoryButtons = useMemo(() => {
    return categoryArray.map((item) => (
      <button
        onClick={() => selectedCategoryHandler(item.name)}
        key={item.name}
        className="category-btn"
        style={{
          borderRadius: '0',
          background: item.name === selectedCategory && colors.secondary,
          color: item.name === selectedCategory && '#fff',
        }}
      >
        <span style={{ color: item.name === selectedCategory ? '#fff' : colors.secondary, marginRight: '15px' }}>
          {item.icon}
        </span>
        <span style={{ opacity: '1' }}>{item.name}</span>
      </button>
    ));
  }, [selectedCategory, selectedCategoryHandler]);

  return (
    <Stack direction="row" sx={{ overflowX: 'scroll' }}>
      {memoizedCategoryButtons}
    </Stack>
  );
};

export default Category;