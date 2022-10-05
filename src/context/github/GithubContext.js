import { createContext ,useReducer} from "react";
import githubReducer from "./GithubReducer";

const GithubContext=createContext()

const GITHUB_URL=process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN=process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider=({children})=>{

    const initialState={
        users:[],
        user:{},
        repos:[],
        loading:false
    }

    const [state,dispatch]=useReducer(githubReducer,initialState)


    // TESTING PURPOSES 
    const fetchUsers = async () =>{
        // console.log(`${process.env.REACT_APP_GITHUB_URL}`)
        SetLoading()
        const response =await fetch(`${GITHUB_URL}/users`,{
            headers:{
                Authorization:`${GITHUB_TOKEN}`
            },
        })
        const data= await response.json()
        // SetUsers(data)
        // SetLoading(false)

        dispatch({type:'GET_USERS',payload:data,})
    }

    const searchUsers = async (text) =>{
        // console.log(`${process.env.REACT_APP_GITHUB_URL}`)
        SetLoading()
        const param=new URLSearchParams({
            q:text
        })
        const response =await fetch(`${GITHUB_URL}/search/users?${param}`,{
            headers:{
                Authorization:`${GITHUB_TOKEN}`
            },
        })
        const {items}= await response.json()
        

        dispatch({type:'GET_USERS',payload:items,})
    }
    const clearSearch = async () =>{
        // console.log(`${process.env.REACT_APP_GITHUB_URL}`)
        SetLoading()
        dispatch({type:'CLEAR_USERS'})
    }


    const getUser = async (login) =>{
        // console.log(`${process.env.REACT_APP_GITHUB_URL}`)
        SetLoading()
        const response =await fetch(`${GITHUB_URL}/users/${login}`,{
            headers:{
                Authorization:`${GITHUB_TOKEN}`
            },
        })
        if(response.status===404)
        {
            window.location='/notfound'
        }
        const data= await response.json()
        // SetUsers(data)
        // console.log(data)
        // SetLoading(false)

        dispatch({type:'GET_USER',payload:data,})
    }
    const getUserRepo= async (login) =>{
        // console.log(`${process.env.REACT_APP_GITHUB_URL}`)
        SetLoading()
        const response =await fetch(`${GITHUB_URL}/users/${login}/repos`,{
            headers:{
                Authorization:`${GITHUB_TOKEN}`
            },
        })
        if(response.status===404)
        {
            window.location='/notfound'
        }
        const data= await response.json()
        // SetUsers(data)
        console.log(data)
        // SetLoading(false)

        dispatch({type:'GET_USER_REPO',payload:data,})
    }
    const SetLoading=()=>dispatch({type:'SET_LOADING'})


    return <GithubContext.Provider value={{users:state.users,loading:state.loading,user:state.user,repos:state.repos,getUser,searchUsers,fetchUsers,clearSearch,getUserRepo}}>

        {children}
    </GithubContext.Provider>

}

export default GithubContext