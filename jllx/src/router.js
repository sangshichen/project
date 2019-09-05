import about from './components/about'
import home from './components/home'
import skill from './components/skill'
import myexperience from './components/myexperience'
import project1 from './components/myex/project1.vue'
import project2 from './components/myex/project2.vue'
import project3 from './components/myex/project3.vue'
import connect from './components/connect'
import thanks from './components/thanks'






export const routes = [
    {path:'/',component:home},
    {path:'/about',component:about},
    {path:'/skill',component:skill},
    {path:'/myexperience',component:myexperience,redirect:'/project1',children:[
        {path:'/project1',component:project1},
        {path:'/project2',component:project2},
        {path:'/project3',component:project3}
    ]},
    {path:'/connect',component:connect},
    {path:'/thanks',component:thanks},
    {path:'*',redirect:'/'}
]