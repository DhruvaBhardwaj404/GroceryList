import AddGrocery from './AddGrocery/AddGrocery.jsx'
import GroceryList from './GroceryList/GroceryList.jsx'
import Home from './Home/Home.jsx'
import Update from './Update/Update.jsx'
import NotFound from './NotFound.jsx'

export const route=[
    { path:'/home',component:Home},
    { path:'/addItem',component:AddGrocery},
    { path:'/List',component:GroceryList},
    { path:'/update',component:Update},
    { path:'/*',component:NotFound},
]