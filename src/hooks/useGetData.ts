import axios from 'axios'
import { useState } from 'react'
import useSwr from 'swr'

const url = 'https://fe-task-api.mainstack.io/'


const useGetData = () => {

    const [response, setResponse] = useState<any>()
    
    const fetcher = (url: string) => axios.get(url)
                                    .then((response) => response.data)
                                    .then((response) => {
                                        setResponse(response)
                                    })

    const { data=response, error, isLoading } = useSwr(url, fetcher)


    return { data, error, isLoading }
}

export default useGetData