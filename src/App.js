import logo from './logo.svg';
// import './App.css';
import disney from './Assets/Disney.png'
import Navigation from './Components/Navigation';
import React, { useState } from "react";
import video from './Assets/movies/ANIMAL.mp4'
import Heeriye from './Assets/movies/Heeriye.mp4'
import RRR from './Assets/movies/RRR.mp4'
import Rakul from './Assets/movies/Rakul.mp4'
import Pathaan from './Assets/movies/Pathaan.mp4'
import Crew from './Assets/movies/Crew.mp4'
import Neeraj from './Assets/movies/Neeraj.mp4'
import Lionel from './Assets/movies/Lionel.mp4'
import dhoni from './Assets/movies/dhoni.mp4'
import india from './Assets/movies/india.mp4'
import SWIMMER from './Assets/movies/SWIMMER.mp4'
import Volleyball from './Assets/movies/Volleyball.mp4'
import Ball from './Assets/movies/Ball.mp4'
import hotstar from './Assets/movies/hotstar.mp4'
import fighter from './Assets/movies/fighter.mp4'
import Kaali from './Assets/movies/Kaali.mp4'
import Tere from './Assets/movies/Tere.mp4'
import tollywood from './Assets/movies/tollywood.mp4'
import Disney from './Assets/movies/Disney.mp4'
import Bloody from './Assets/movies/Bloody.mp4'
import last from './Assets/movies/last.mp4'







function App() {
  const [cont, setcount] = useState(0)
   return (
    <div className=''>
      <slider />
    <div className="App " style={{ backgroundColor: "" }}>
        <Navigation />

        <div class="carousel-container">
          <div class="carousel">
            <div class="slider">
              <div class="slide-contain">
                <h1 class="movie-tital"></h1>
                <p class="movie-des"></p>
              </div>
              <li className="">
                            <a className="" href="#"><i>Popular Genres</i></a>
                        </li>
                        
              
              <a href={video}><img src="https://i.ytimg.com/vi/Dydmpfo68DA/maxresdefault.jpg"alt=""width="315px" height="170px" controls></img></a>
              <a href={Rakul}><img src="https://wp.missmalini.com/wp-content/uploads/2023/10/Untitled-design-2023-10-10T135144.577.png" alt=""width="315px" height="170px"></img></a>
              <a href={Heeriye}> <img src="https://i.ytimg.com/vi/Pn29xVZ0-cY/maxresdefault.jpg" alt=""width="315px" height="170px"></img></a>
              <a href={RRR}><img src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/7641/1307641-h-28e0c285bf39" alt=""width="315px" height="170px"></img></a>

              <li className="">
                            <a className="" href="#"><i>Video Player</i></a>
                        </li>
                <div>
             
                <video width="16%" height="1000%" controls autoPlay onMouse muted>
                  <source src={video} type='video/mp4' />
                </video>
                 <video width="16%" height="100%" controls autoPlay onMouse muted> 
                  <source src={Pathaan} type='video/mp4' />
                </video> 
                <video width="16%" height="100%" controls autoPlay onMouse muted>
                  <source src={Crew} type='video/mp4' />
                </video>
                
                
               <li className="">
                            <a className=""><i> Best in Sports</i></a>
               </li>
              
               <a href={Neeraj}><img src=" https://sportsauthorityofindia.nic.in/sai/assets/frontend/images/Neeraj_chopra2023.jpg"alt=""width="140px" height="130px" controls></img></a>
                 <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/9513/1708529619513-h"
                           alt="" width="140" height="130px" />
                          
                           <a href={Lionel}><img src="https://cdn.britannica.com/22/238522-050-F29FD74E/FIFA-2022-World-Cup-Argentina.jpg"alt=""width="140px" height="130px" controls></img></a>
                 <a href={dhoni}><img src="https://feeds.abplive.com/onecms/images/uploaded-images/2023/08/05/dfc802454c865c243b0bfac19f9b1d14169120480192424_original.jpg?impolicy=abp_cdn&imwidth=650"
                           alt="" width="155px" height="130px"controls></img></a>
              <a href={india}><img src="https://i0.wp.com/ketto.blog/wp-content/uploads/2022/10/Fundraising-Ideas-for-High-School-Sports.jpg?fit=3200%2C1500&ssl=1"
                           alt="" width="150px" height="130px"controls></img></a>
              <a href={SWIMMER}><img src="https://www.oakridge.in/wp-content/uploads/2022/03/VIS_6317.jpg"
                           alt="" width="150px" height="130px"controls></img></a>
              <a href={Volleyball}><img src="https://www.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_960/MjA0NTM0OTE3MjY5MzAwNTM5/juju-watkins-graphic.jpg"
                           alt="" width="150px" height="130px"controls></img></a>
               <a href={Ball}><img src="https://npr.brightspotcdn.com/dims4/default/ff29cd1/2147483647/strip/true/crop/1024x768+0+0/resize/880x660!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fkcur%2Ffiles%2F201710%2FCricketBall.jpg"
                            alt="" width="150px" height="130px"controls></img></a>
                
               
                  </div>
                  <div>
                  <li className="">
                            <a className=""><i> Movies List</i></a>
               </li>
               </div>
               
                <div>
              <a href={hotstar}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sDgoNAhA_9hPKN-TlwMGQPHrdzEiy4IFRm-AtM-H3Tt3LKtVS2kXAhwB5TdoF95Hb_E&usqp=CAU"
                alt="" width="320px" height="140px"></img></a> 
               <a href={fighter}> <img src="https://i.ytimg.com/vi/6amIq_mP4xM/maxresdefault.jpg"
                alt="" width="320px" height="140px" ></img></a>
               <a href={Kaali}> <img src="https://dev-resws-hungamatech-com.storage.googleapis.com/featured_content/b9c6aec76339f8a61543e177c71515f7_1280x800.jpg"
                alt="" width="300px" height="140px" ></img></a>
               <a href={Tere}> <img src="https://m.media-amazon.com/images/M/MV5BMTgzNDY4NDkyN15BMl5BanBnXkFtZTcwOTUyNDEzOA@@._V1_.jpg"
                alt="" width="310px" height="140px" ></img></a>
               <a href={tollywood}> <img src="https://www.pinkvilla.com/english/images/2023/07/1941022096_orange-yellow-minimalist-aesthetic-a-day-in-my-life-travel-vlog-youtube-thumbnail_1280*720.jpg"
                alt="" width="300px" height="140px" ></img></a>
               <a href={Disney}> <img src=" https://images.indulgexpress.com/uploads/user/imagelibrary/2020/4/3/original/disney.jpg"
                alt="" width="390px" height="140px" ></img></a>
               <a href={Bloody}>  <img src="https://www.ibc24.in/wp-content/uploads/2023/09/Filmy4wap-XYZ-1.jpg"
                alt="" width="300px" height="140px" ></img></a>
               <a href={last}><img src="https://imgcdn.ragalahari.com/mar2021/designs/hari-hara-veera-mallu-posters/hari-hara-veera-mallu-posters1t.jpg"
                alt="" width="265px" height="140px" ></img></a>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


