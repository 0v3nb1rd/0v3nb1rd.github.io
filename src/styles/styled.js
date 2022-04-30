import styled from 'styled-components'
import { motion } from 'framer-motion'

//Styled Components -->
export const MFullSection = styled(motion.section)`
  position: relative;
  display: flex;
  flex-direction: ${(props) => (props.col ? 'column' : 'row')};
  align-items: ${(props) => props.items || 'center'};
  justify-content: ${(props) => props.justify || 'center'};
  height: 100%;
`
