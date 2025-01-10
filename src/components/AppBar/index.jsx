import ModeSelect from '../../components/ModeSelect'
import { Box } from '@mui/material'

function AppBar() {
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      height: (them) => them.trello.appBarHeight,
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    }}>
      <ModeSelect></ModeSelect>
    </Box>
  )
}
export default AppBar