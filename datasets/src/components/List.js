import React from 'react'
import TablePage from './TablePage'
import '../App.css';
import axios from 'axios';
function List({name,length,index,date}) {
  var cUser=JSON.parse(localStorage.getItem('currentUser'));
  var u_id=cUser._id;
  //console.log(u_id)
  function handleClick(){
   
    window.location.href=`/table/${index}`
  }

  function handleButtonClick(e){
    async function Delete(){
      try{
        const data=await (await axios.post('/api/users/delete',{data:{u_id:u_id,index:index}})).data;
        console.log(data);
      }
      catch(e){console.log(e)}
      window.location.href='/lists'
    }
    Delete();
    e.stopPropagation();
    
  }
  return (
    // <div className='card justify-content mt-2 ml-1 mr-1'>
    //     <div className='card-body'>
    //     <a className="card-block stretched-link text-decoration-none text-black" href={`/table/${index}`}>
    //     <span className='card-title pr-6'>{name}</span>
    //     <span className='text-xs-center card-text pl-4 mx-auto'><b>Records:</b>{length}</span>
    // </a>
    //     </div>
        
    // </div>
    <div class="container">
<div class="mt-5">
      <div class="d-style bgc-white btn btn-brc-tp btn-outline-green btn-h-outline-green btn-a-outline-green w-100 my-2 py-3 shadow-sm border-2" onClick={handleClick}>
     
        <div class="row align-items-center">
          <div class="col-12 col-md-4">
            <h4 class="pt-3 text-170 text-600 text-green-d1 letter-spacing">
              {name}
            </h4>

            {/* <div class="text-secondary-d2 text-120">
              <div class="text-danger-m3 text-90 mr-1 ml-n4 pos-rel d-inline-block">
                $<span class="text-150 deleted-text">30</span>
                <span>
                    <span class="d-block rotate-45 position-l mt-n475 ml-35 fa-2x text-400 border-l-2 h-5 brc-dark-m1"></span>
                </span>
              </div>
              <span class="align-text-bottom">$</span><span class="text-180">20</span> / month
            </div> */}
          </div>
        <span class='mb-0 col-12 col-md-3 text-dark-l1 text-90 text-left my-4 my-md-0"'><b>Records:</b>{length}</span>
        <span class='mb-0 col-12 col-md-3 text-dark-l1 text-90 text-left my-4 my-md-0" justify-content'><b>Date Created:</b><br />{date}</span>
          {/* <ul class="list-unstyled mb-0 col-12 col-md-4 text-dark-l1 text-90 text-left my-4 my-md-0">
            <li>
              <i class="fa fa-check text-success-m2 text-110 mr-2 mt-1"></i>
              <span>
                <span class="text-110">Everything in Basic...</span>
              </span>
            </li>

            <li class="mt-25">
              <i class="fa fa-check text-success-m2 text-110 mr-2 mt-1"></i>
              <span class="text-110">
                Non diam phasellus
            </span>
            </li>

            <li class="mt-25">
              <i class="fa fa-check text-success-m2 text-110 mr-2 mt-1"></i>
              <span class="text-110">
                Tortor mauris
            </span>
            </li>
          </ul> */}

          <div class="col-12 col-md-2 text-center">
            <button onClick={handleButtonClick} class="f-n-hover btn btn-success btn-raised px-4 py-25 mb-1 w-32 text-600"><i >Delete</i></button>
            <button onClick={handleButtonClick} class="f-n-hover btn btn-success btn-raised px-4 py-25 w-32 text-600"><i >Edit</i></button>
          </div>
        </div>

      </div>

    </div>
</div>
  )
}

export default List