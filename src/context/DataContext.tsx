import useGetData from "@/hooks/useGetData";
import { createContext } from "react";

interface DataProps {
    children: React.ReactElement
}

interface DataContextProps  {
    data: any
    error: any
    isLoading: boolean
}
export const DataContext = createContext<any>({})

export const DataProvider:React.FC<DataProps>  = ({ children }) => {
    const { data, error, isLoading } = useGetData()
    const done = 'Doingf'

    console.log(data)
    return (
        <DataContext.Provider value={{
            data, error, isLoading,done
        }}>
            { children}

        </DataContext.Provider>
    )
}