import React from 'react';
import PropTypes from 'prop-types';

const ProductCTA = ({ CTA }) => (
  
<>
    <div class=" m-auto grid  md:grid-cols-2    lg:grid-cols-2 bg-gray-200 flex-1">
        <div class="m-auto">
            <img src={CTA.productCtAs[0].ctAimg.file.url}></img>
        </div>
        <div class="m-auto p-14 w-auto text-left flex-1">
            <h4 class ="text-blue-900 font-bold text-left p-3">
            {CTA.productCtAs[0].header}
            </h4>
            <h2 class=" text-left leading-tight p-3  text-gray-800 text-3xl ">
            
            {CTA.productCtAs[0].subHeader}
            </h2>
            <p class="p-3">
            {CTA.productCtAs[0].copy.copy}
            </p>
            <h2 class=" text-left leading-tight p-3  text-black text-2xl "> 
            Bikes staring at
            </h2>
            <div class="flex items-center space-x-4 my-4 w-45">
            <div class="flex-1 items-center ">
            <p class="text-grey-500 text-xl font-semibold">$1,039.98  <span class="border-l-2  border-black p-1"/> $27 a month*</p>
            <p class="">Plus Cost of Echelon United Membership. </p><a  class="underline"href="#">Learn more</a>
          </div>
        </div> 
        
            <button class=" m-auto w-2/4 flex items-center justify-center border border-transparent  text-white bg-red-600 hover:bg-red-700 md:py-4 "> {CTA.productCtAs[0].buttonTitle} </button>
       </div> 

    </div>


<div class=" m-auto grid  md:grid-cols-2 lg:grid-cols-2 bg-gray-200 ">
<div class="m-auto p-14 w-auto text-lefto">
<h4 class ="text-blue-900 font-bold text-left p-3">
            {CTA.productCtAs[1].header}
            </h4>
            <h2 class=" text-left leading-tight p-3  text-gray-800 text-3xl ">
            
            {CTA.productCtAs[1].subHeader}
            </h2>
            <p class="p-3">
            {CTA.productCtAs[1].copy.copy}
            </p>
            <h2 class=" text-left leading-tight p-3  text-black text-2xl "> 
            Bikes staring at
            </h2>
            <div class="flex items-center space-x-4 my-4 w-45">
            <div class="flex-1 items-center ">
            <p class="text-grey-500 text-xl font-semibold">$1,039.98  <span class="border-l-2  border-black p-1"/> $27 a month*</p>
            <p class="">Plus Cost of Echelon United Membership. </p><a  class="underline"href="#">Learn more</a>
          </div>
        </div> 
        
            <button class="w-2/4 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 m-auto"> {CTA.productCtAs[1].buttonTitle}</button>    
            </div>


<div class="m-auto">
<img src={CTA.productCtAs[1].ctAimg.file.url}></img>
</div> 

</div>
</>









);

ProductCTA.propTypes = {
    plan: PropTypes.object.isRequired
};


export default ProductCTA;