import { Container, Box } from '@mui/material'
import AppBar from '../../components/AppBar'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'

export default function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBar>  </AppBar>
      <BoardBar>  </BoardBar>
      <BoardContent></BoardContent>
    </Container>
  )
}