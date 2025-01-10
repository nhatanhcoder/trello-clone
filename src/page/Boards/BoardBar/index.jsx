import { Box } from '@mui/material'

function BoardBar() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        height: (them) => them.trello.boardBarHeight,
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      Board bar
    </Box>
  )
}
export default BoardBar
