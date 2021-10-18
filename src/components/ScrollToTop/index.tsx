import { useState, useEffect } from 'react'
import { ChevronsUp as ChevronsUpIcon } from '@styled-icons/boxicons-regular/ChevronsUp'

import * as S from './styles'

const ScrollToTop: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(
    typeof window !== 'undefined' ? window.pageYOffset : 0
  )

  useEffect(() => {
    const handleScrollPosition = () => {
      setScrollPosition(window.pageYOffset)
    }

    window.addEventListener('scroll', handleScrollPosition)

    return () => {
      window.removeEventListener('scroll', handleScrollPosition)
    }
  }, [])

  return (
    <S.Wrapper
      onClick={() => window.scrollTo(0, 0)}
      show={scrollPosition > 300}
    >
      <ChevronsUpIcon color="var(--white)" size="30px" />
    </S.Wrapper>
  )
}

export default ScrollToTop
