import React,  { useEffect, useState }  from "react";
// import christmas from '../../assets/img/christmas.png' 
import diwali from '../../assets/img/diwali.jpg';
// import newYear from '../../assets/img/new.png'  
import axios from "axios";
export default function ServicesCards() {

  const [roles, getRoles] = useState('');
  const url = "http://localhost:8000/event";

  useEffect(()=>{
    getAllEvents();
  },[]);

  const getAllEvents = ()=>{
      axios.get(url)
      .then((response)=>{
          const allEvents = response.data;
          getRoles(allEvents);
          // console.log(allRoles);
      })
      .catch(error => console.error(`Error:${error}`));
  }

  const evnetslist = Array.from(roles);
  const len = evnetslist.length
  const arr = evnetslist.map((event, index)=>{
      return(
        <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full " src={diwali} alt={event.title} ></img>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{event.title}</div>
          <p class="text-gray-700 text-base">
            {event.description}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <ul>
              <li>Date : {event.date}</li>
              <li>Time : {event.time}</li>
              <li>Venue : {event.venue}</li>
          </ul>
        </div>
      </div>
      )
  })

return (

    <>
  <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
  {len ? arr : <div class="font-bold text-xl mb-2">No events yet</div>} 

    {/* <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src={christmas} alt="Christmas" ></img>
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Christmas Celebration</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-4">
        <ul>
            <li>Date : 25-12-2022</li>
            <li>Time : 9pm onwards</li>
            <li>Venue : neeche aa jao xd</li>
        </ul>
      </div>
    </div>  

    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src={newYear} alt="Forest"></img>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">New Year Celebration</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <ul>
            <li>Date : 31-12-2022</li>
            <li>Time : 12 midnight</li>
            <li>Venue : neeche aa jao xd</li>
        </ul>
      </div>
    </div> */}
  </div>



  </>
)}


        
