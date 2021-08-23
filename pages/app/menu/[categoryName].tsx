import { useRouter } from 'next/router'
import Menu from '../../../components/menu/Menu'

export default function menuPage() {
  const router = useRouter()

  return (
    <>
      <Menu categoryName={router.query.categoryName} />
    </>
  )
}
