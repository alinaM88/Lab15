import { Routes, Route } from 'react-router-dom'
import './style.css'

function News(){
    return(
        <p><h1>News</h1></p>
    )
}

function About(){
    return(
        <h1>Южный Федеральный университет</h1>
    )
}

function Contact(){
    return(
        <h2>8 (800) 555 - 55 - 55</h2>
    )
}

export function Main(){
    return (
    <div class='main'>
        <div class = 'main_container'>
            <section class ='flex-center'><img src = 'https://sun9-27.userapi.com/s/v1/ig2/R43b0yPxZe5kFBNEV0R3QxKJEqPQ2nrNa20zTxz_TxIycLDujL7l7VPyj-n-S8LvnFAG1_nNsu-8_7K5lcGRzuPF.jpg?quality=95&as=32x30,48x45,72x68,108x101,160x150,240x226,360x338,480x451,540x507,640x601,720x677,1080x1015&from=bu&u=ZvBv6k9eI7LBYIHYDgVdyXYhGOHK-Zd42eOAR6BCPRo&cs=1080x0' width={200}></img></section>
            <article class = 'flex-center'>
                <Routes>
                    <Route path='/news' element ={<News />} />
                    <Route path='/about' element ={<About />} />
                    <Route path='/contact' element ={<Contact />} />
                    <Route path='*' element ={<h3>Некорректная ссылка</h3>} />
                </Routes>
            </article>
            <aside class = 'flex-center'>Belobrovskaya Alina Albertovna</aside>
        </div>
    </div>
    )
}

export default Main