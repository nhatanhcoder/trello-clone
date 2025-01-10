import { Box } from '@mui/material';

function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: 'secondary.main',
        height: (them) =>
          `calc(100vh - ${them.trello.appBarHeight} - ${them.trello.boardBarHeight})`,
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      Board content
    </Box>
  )
}

export default BoardContent
