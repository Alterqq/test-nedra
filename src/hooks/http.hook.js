import {useState, useCallback} from 'react'
import axios from 'axios'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const request = useCallback(async (url) => {
    setLoading(true)
    try {
      const data = await axios.get(url).then(r => r.data)
      setLoading(false)

      return data
    } catch (e) {
      setLoading(false)
      throw e
    }
  }, [])


  return {loading, request}
}
